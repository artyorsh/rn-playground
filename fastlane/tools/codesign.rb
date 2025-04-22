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

  install_provisioning_profile(
    path: ENV['FASTLANE_IOS_PROVISIONING_PROFILE_PATH'],
  )

  update_code_signing_settings(
    path: XCODEPROJ_PATH,
    use_automatic_signing: true,
    profile_uuid: ENV["FASTLANE_IOS_PROFILE_UUID"],
    team_id: ENV["FASTLANE_IOS_TEAM_ID"],
  )

end