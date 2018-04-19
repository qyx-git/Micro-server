package com.example.qyx.test1;

import java.net.Socket;
import java.util.HashMap;

/**
 * Created by qyx on 2018/4/8.
 */

public class HttpContext {

    //以kv形式存储请求头信息
    private final HashMap<String,String> requestHeader;


    private Socket underlySocket;

    public HttpContext(){
        requestHeader = new HashMap<String, String>();
    }

    public void setUnderlySocket(Socket socket) {
        this.underlySocket = socket;

    }
    public Socket getUnderlySocket(){
        return this.underlySocket;
    }

    /**
     * 加入头信息
     * @param headerName
     * @param headerValue
     */
    public void addRequestHeader(String headerName, String headerValue ) {

        requestHeader.put(headerName,headerValue);
    }

    public String getRequestHearderValue(String hearderName){
        return requestHeader.get(hearderName);
    }
}
