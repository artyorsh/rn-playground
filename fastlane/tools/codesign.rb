def android_codesign_properties(options)

  {
    "android.injected.signing.store.file" => ENV['FASTLANE_ANDROID_KEYSTORE_FILE'],
    "android.injected.signing.store.password" => ENV['FASTLANE_ANDROID_KEYSTORE_PASSWORD'],
    "android.injected.signing.key.alias" => ENV['FASTLANE_ANDROID_KEYSTORE_KEY_ALIAS'],
    "android.injected.signing.key.password" => ENV['FASTLANE_ANDROID_KEYSTORE_KEY_PASSWORD'],
  }

end

# Modifies the .entitlements file to be empty, so that the app can be exported with 'development' profile
# Enables automatic code signing for FASTLANE_IOS_TEAM_ID
def ios_hack_development_codesigning(options)

  entitlements_path = "#{IOS_DIR}/#{PROJECT_NAME}/#{PROJECT_NAME}.entitlements"

  entitlements_content = File.read(entitlements_path)
  entitlements_content = entitlements_content.gsub(/<dict>.*?<\/dict>/m, '<dict></dict>')
  File.write(entitlements_path, entitlements_content)

  enable_automatic_code_signing(
    path: XCODEPROJ_PATH,
    team_id: ENV["FASTLANE_IOS_TEAM_ID"],
  )

end