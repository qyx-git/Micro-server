package com.example.qyx.test1;

/**
 * Created by qyx on 2018/4/8.
 */

public class WebConfiguration {
    /**
     * 端口号
     */
    private int port;
    /**
     * 最大监听并发数
     */
    private int parallels;

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public int getParallels() {
        return parallels;
    }

    public void setParallels(int parallels) {
        this.parallels = parallels;
    }
}
