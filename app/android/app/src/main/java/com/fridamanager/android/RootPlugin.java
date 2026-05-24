package com.fridamanager.android;

import android.util.Log;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(name = "Root")
public class RootPlugin extends Plugin{
    @PluginMethod
    public void test(PluginCall call){
        Log.d("FridaManager", "Bridge Works");
        call.resolve();
    }
}

