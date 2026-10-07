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
public class RootPlugin extends Plugin {

    @PluginMethod
    public void test(PluginCall call) {
        Log.d("FridaManager", "Bridge Works");
        call.resolve();
    }

    @PluginMethod
    public void start(PluginCall call) {
        runScript("start.sh", call);
    }

    @PluginMethod
    public void stop(PluginCall call) {
        runScript("stop.sh", call);
    }

    @PluginMethod
    public void status(PluginCall call) {
        runScript("status.sh", call);
    }

    private void runScript(String script, PluginCall call) {
        try {
            Process process = Runtime.getRuntime().exec(
                    new String[]{
                            "su",
                            "-c",
                            "sh /data/adb/modules/fridamanager/scripts/" + script
                    }
            );

            BufferedReader stdout = new BufferedReader(
                    new InputStreamReader(process.getInputStream())
            );

            BufferedReader stderr = new BufferedReader(
                    new InputStreamReader(process.getErrorStream())
            );

            StringBuilder output = new StringBuilder();
            String line;

            while ((line = stdout.readLine()) != null) {
                output.append(line).append("\n");
            }

            StringBuilder error = new StringBuilder();

            while ((line = stderr.readLine()) != null) {
                error.append(line).append("\n");
            }

            int exitCode = process.waitFor();

            JSObject result = new JSObject();
            result.put("output", output.toString().trim());
            result.put("exitCode", exitCode);

            if (exitCode == 0) {
                call.resolve(result);
            } else {
                call.reject(
                        error.length() > 0
                                ? error.toString().trim()
                                : output.toString().trim()
                );
            }

        } catch (Exception e) {
            Log.e("FridaManager", "Script execution failed", e);
            call.reject(e.getMessage());
        }
    }
}