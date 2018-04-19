package com.example.qyx.test1;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * Created by qyx on 2018/4/8.
 */

/**
 * 获取头信息的工具类
 */
public class StreamToolkit {
    public static final String readLine(InputStream inputStream) throws IOException {

        StringBuilder stringBuilder = new StringBuilder();
        //游标
        int c1 = 0;
        int c2 = 0 ;
        while(c2!=-1 && !(c1=='\r' && c2=='\n')){
            c1 = c2;
            c2 = inputStream.read();
            stringBuilder.append((char) c2);
        }

        if (stringBuilder.length()==0){
            return null;
        }
        return stringBuilder.toString();
    }

    //读取文件，返回城数组形式
    public static byte[] readRawFromStream(InputStream inputStream)throws IOException{
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[10240];
        int nReaded;
        while((nReaded = inputStream.read(buffer))>0){
            byteArrayOutputStream.write(buffer,0,nReaded);
        }
        return byteArrayOutputStream.toByteArray();
    }
}
