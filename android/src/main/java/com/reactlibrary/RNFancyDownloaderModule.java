
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import android.content.Intent;
import android.net.Uri;
import java.io.File;

public class RNFancyDownloaderModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNFancyDownloaderModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNFancyDownloader";
  }

  @ReactMethod
  public void installApp(String apkPath) {
    String command = "chmod 777 " + apkPath;

    try {
      Runtime.getRuntime().exec(command);
    } catch (Exception error) {
      error.printStackTrace();
    }

    Intent openIntent = new Intent(Intent.ACTION_VIEW);
    openIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    openIntent.setDataAndType(Uri.parse("file://" + apkPath), "application/vnd.android.package-archive");

    reactContext.startActivity(openIntent);
  }

}