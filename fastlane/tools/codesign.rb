def android_codesign_properties(options)

  {
    "android.injected.signing.store.file" => ENV['RNAPP_ANDROID_KEYSTORE_FILE'],
    "android.injected.signing.store.password" => ENV['RNAPP_ANDROID_KEYSTORE_PASSWORD'],
    "android.injected.signing.key.alias" => ENV['RNAPP_ANDROID_KEYSTORE_KEY_ALIAS'],
    "android.injected.signing.key.password" => ENV['RNAPP_ANDROID_KEYSTORE_KEY_PASSWORD'],
  }

end
