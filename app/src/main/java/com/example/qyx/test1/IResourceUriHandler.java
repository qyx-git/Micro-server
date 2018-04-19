package com.example.qyx.test1;

import java.io.IOException;

/**
 * Created by qyx on 2018/4/9.
 */

public interface IResourceUriHandler {

    //接收Uri参数
    boolean accept(String url);

    //handler处理方法
    void handle(String uri,HttpContext httpContext) throws IOException;
}
