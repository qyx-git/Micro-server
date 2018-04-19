package com.example.qyx.test1;

import android.content.Context;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.PrintWriter;

/**
 * Created by qyx on 2018/4/9.
 *
 * 创建静态网站加载实例
 */

public class ResourceInAssetsHandler implements IResourceUriHandler{

    //定义一个路径字段
    private String acceptPrefix = "/static/";

    private Context context;
    @Override
    public boolean accept(String url) {
        return url.startsWith(acceptPrefix);
    }

    @Override
    public void handle(String uri, HttpContext httpContext) throws IOException {

//        //定义开始位置
        int startIndex = acceptPrefix.length();
//        //获取assets路径
        String assertPath = uri.substring(startIndex);
//        //从路径获取asserts对象的信息
        InputStream inputStream = context.getAssets().open(assertPath);
//        //读取文件信息
        byte[] raw = StreamToolkit.readRawFromStream(inputStream);
        inputStream.close();
        //拿到Socket的输出流
        OutputStream outputStream = httpContext.getUnderlySocket().getOutputStream();
        //给调用者返回一段http的空实现信息
//        PrintWriter printWriter = new PrintWriter(outputStream);

        //给调用者一些回写的数据
//        printWriter.println("HTTP/1.1 200 ok");
//        printWriter.println();
//        printWriter.println("from resource in assert handler");
//        printWriter.flush();
//        printWriter.close();
        //设置返回给客户端的信息
        PrintStream printStream = new PrintStream(outputStream);
        printStream.println("HTTP/1.1 200 OK");
        printStream.println("Content-length:"+raw.length);
        //告诉浏览器文件的类型
        if (assertPath.endsWith(".html")){
            printStream.println("Content-Type:text/html");
        }else if(assertPath.endsWith(".js")){
            printStream.println("Content-Type:text/js");
        }else if(assertPath.endsWith(".css")){
            printStream.println("Content-Type:text/css");
        }else if(assertPath.endsWith(".jpg")){
            printStream.println("Content-Type:text/jpg");
        }else if(assertPath.endsWith(".htm")){
            printStream.println("Content-Type:text/htm");
        }
        //头部写完了
        printStream.println();
        printStream.write(raw);
//
        printStream.flush();
        printStream.close();






    }
}
