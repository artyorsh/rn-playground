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
  File.write(entitlements_path, {}.to_plist)

  import_certificate(
    certificate_path: ENV['FASTLANE_IOS_CERT_PATH'],
    certificate_password: ENV["FASTLANE_IOS_CERT_PASSWORD"],
  )

  install_provisioning_profile(
    path: ENV['FASTLANE_IOS_PROVISIONING_PROFILE_PATH'],
  )

  update_code_signing_settings(
    path: XCODEPROJ_PATH,
    use_automatic_signing: true,
    team_id: ENV["FASTLANE_IOS_TEAM_ID"],
    bundle_identifier: "me.artyorsh.rnapp.staging",
    code_sign_identity: "Apple Development"
  )

end