package com.fridamanager.android;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;


public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState){
        registerPlugin(RootPlugin.class);
        super.onCreate(savedInstanceState);


    }
}
