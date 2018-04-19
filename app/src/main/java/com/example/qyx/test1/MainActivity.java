package com.example.qyx.test1;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.MenuItem;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import java.io.IOException;

public class MainActivity extends AppCompatActivity {

    private TextView mTextMessage;


    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_home:
                    mTextMessage.setText(R.string.title_home);
                    return true;
                case R.id.navigation_dashboard:
                    mTextMessage.setText(R.string.title_dashboard);
                    return true;
                case R.id.navigation_notifications:
                    mTextMessage.setText(R.string.title_notifications);
                    return true;
            }
            return false;
        }
    };
    private SimpleHttpServer server;

    /**
     * 启动我们的服务器
     *
     * @param savedInstanceState
     */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mTextMessage = (TextView) findViewById(R.id.message);
        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        //启动我们的服务端
        WebConfiguration webConfiguration = new WebConfiguration();
        webConfiguration.setPort(8088);
        webConfiguration.setParallels(50);
        server = new SimpleHttpServer(webConfiguration);
        //创建相关的实例
        server.registResourceHandler(new ResourceInAssetsHandler());
        server.registResourceHandler(new UploadImageHandler() {
            @Override
            protected void onImgLoaded(String path) {
                showImg(path);
            }


        });
        server.startAsync();
    }

    private void showImg(final String path) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ImageView imageView = (ImageView) findViewById(R.id.ivImage);
                //把路径解析为bitmap
                Bitmap bitmap = BitmapFactory.decodeFile(path);
                imageView.setImageBitmap(bitmap);
                Toast.makeText(MainActivity.this,"img received and shown",Toast.LENGTH_SHORT);
            }
        });

    }

    /**
     * 停止我们的服务器
     */
    @Override
    protected void onDestroy() {
        try {
            server.stopAsync();
        } catch (IOException e) {
            Log.e("spy", e.toString());
        }
        super.onDestroy();
    }
}
