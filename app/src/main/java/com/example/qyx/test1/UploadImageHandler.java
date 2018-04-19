package com.example.qyx.test1;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.PrintWriter;

/**
 * Created by qyx on 2018/4/9.
 */

public class UploadImageHandler implements IResourceUriHandler {

    //定义一个路径字段
    private String acceptPrefix = "/upload_image/";

    @Override
    public boolean accept(String url) {
        return url.startsWith(acceptPrefix);
    }

    @Override
    public void handle(String uri, HttpContext httpContext) throws IOException {
//        给调用者返回一段http的空实现信息
//        OutputStream outputStream = httpContext.getUnderlySocket().getOutputStream();
//        PrintWriter printWriter = new PrintWriter(outputStream);

//        给调用者一些回写的数据
//        printWriter.println("HTTP/1.1 200 ok");
//        printWriter.println();
//        printWriter.println("from upload image handler");
//        printWriter.flush();
//        printWriter.close();

        //获取Http请求的长度
        long totalLength = Long.parseLong(httpContext.getRequestHearderValue("Content-length"));


        //把图片放入输出流中
        String filePath = "/mnt/sdcard/test_upload.jpg";
        FileOutputStream fileOutputStream = new FileOutputStream(filePath);

        //获取Socket请求，放入输入流中
        InputStream inputStream = httpContext.getUnderlySocket().getInputStream();

        byte[] buffer = new byte[10240];
        int nRead = 0;//读到的数据
        long nLeftLength = totalLength;//剩余字节数

        while ((nRead = inputStream.read(buffer)) > 0 && nLeftLength > 0) {
            fileOutputStream.write(buffer, 0, nRead);
            nLeftLength -= nRead;
        }
        fileOutputStream.close();

        //在response里面写一段处理成功的报文
        OutputStream stream = httpContext.getUnderlySocket().getOutputStream();

        PrintStream printStream = new PrintStream(stream);
        printStream.println("HTTP/1.1 200 OK");
        printStream.println();

        //把路径传出去
        onImgLoaded(filePath);

    }

    protected void onImgLoaded(String path){


    }
}
