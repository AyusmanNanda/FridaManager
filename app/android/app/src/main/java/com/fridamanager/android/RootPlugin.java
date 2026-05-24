package com.fridamanager.android;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginMethod;

import java.io.BufferedReader;
import java.io.InputStreamReader;


@CapacitorPlugin(name = "Root")
public class RootPlugin extends Plugin{
    @PluginMethod
    public void test(PluginCall call){
        Log.d("FridaManager", "Bridge Works");
        call.resolve();
    }
    @PluginMethod
    public void status(PluginCall call) {
        try {
            Process process = Runtime.getRuntime().exec(
                    new String[]{
                            "su",
                            "-c",
                            "sh /data/adb/modules/fridamanager/scripts/status.sh"
                    }
            );
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String result = reader.readLine();

            JSObject ret = new JSObject();
            ret.put("status", result);

            call.resolve(ret);
        }
        catch(Exception e) {
            call.reject(e.getMessage());
        }
    }
}

