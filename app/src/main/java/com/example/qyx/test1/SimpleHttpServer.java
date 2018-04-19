package com.example.qyx.test1;

import android.util.Log;

import java.io.IOException;
import java.io.InputStream;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Created by qyx on 2018/4/8.
 */

public class SimpleHttpServer {

    private final WebConfiguration webConfiguration;
    private final ExecutorService threadPool;
    private ServerSocket socket;
    private Set<IResourceUriHandler> resourceHandlers;

    /**
     * 在构造方法中传入配置参数
     * @param webConfiguration
     */
    public SimpleHttpServer(WebConfiguration webConfiguration){
        this.webConfiguration = webConfiguration;
        //该线程池在执行完之后不会立即销毁，避免频繁的创建和销毁
        threadPool = Executors.newCachedThreadPool();
        //声明为HashSet类型
        resourceHandlers = new HashSet<IResourceUriHandler>();
    }

    //状态信息
    private boolean isEnable;


    /**
     * 启动server(异步)
     */
    public void startAsync(){
        isEnable = true;
        new Thread(new Runnable() {
            @Override
            public void run() {
                doProcSync();
            }
        }).start();
    }



    /**
     * 停止server(异步)
     */
    public void stopAsync() throws IOException {

        if (!isEnable){
            return;
        }
        isEnable = false;

        socket.close();
        //当这里充值未null时候，会抛出一个异常
        socket = null;
    }

    /**
     * 异步监听
     */
    private void doProcSync() {


        try {
            //1.通过配置传入端口号，绑定监听端口
            InetSocketAddress socketAddr = new InetSocketAddress(webConfiguration.getPort());
            socket = new ServerSocket();
            socket.bind(socketAddr);
            //2.等待连接
            while(isEnable){
                //accept()为阻塞的方法，有远端连接我们当前这个端口时候才返回
                final Socket remotePeer = socket.accept();
                //这里我们用一个线程池来实现多个Socket连接，把连接提交给线程池来处理
                threadPool.submit(new Runnable() {
                    @Override
                    public void run() {
                        //打印连接信息
                        Log.d("spy","a remote peer accepted" +remotePeer.getRemoteSocketAddress().toString());
                         onAcceptRemotePeer(remotePeer);
                    }


                });
            }
        } catch (IOException e) {
            //在这里进行捕获socket-null时候的异常
            //当前线程为accept，当它在另外的一个地方被stop时候
            Log.e("spy",e.toString());
        }
    }
    private void onAcceptRemotePeer(Socket remotePeer) {

        try {
            HttpContext httpContext = new HttpContext();
            //把拿到的Socket存进去
            httpContext.setUnderlySocket(remotePeer);
            InputStream inputStream = remotePeer.getInputStream();
            //返回一个字符串查看监听结果
//            remotePeer.getOutputStream().write("congratulation,connect successful".getBytes());
            String headLine = null;
            //获取Url的相对路径-----实现路由规则1
            String resourceUri = headLine = StreamToolkit.readLine(inputStream).split(" ")[1];
            Log.d("spy",resourceUri);

            while((headLine=StreamToolkit.readLine(inputStream))!=null){
                if(headLine.equals("\r\n")){
                    break;
                }
                //头信息
                String[] pairs = headLine.split(": ");
                if (pairs.length>1){

                    httpContext.addRequestHeader(pairs[0],pairs[1]);
                }
                //把头信息打印出来
                Log.d("spy","header line:"+headLine);
            }
            //遍历获取我的handler
            for (IResourceUriHandler handler:resourceHandlers) {
                if(!handler.accept(resourceUri)){
                    continue;
                }
                handler.handle(resourceUri,httpContext);
            }
        } catch (IOException e) {
            Log.e("spy",e.toString());
        }
    }

    public void registResourceHandler(IResourceUriHandler iResourceUriHandler){
        //添加到resourceHandler中
         resourceHandlers.add(iResourceUriHandler);

    }
}
