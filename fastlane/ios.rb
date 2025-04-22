platform :ios do

  desc "Builds .ipa and stores it in the `./build` folder"
  desc "Important: .ipa installation on a physical device is not possible without configuring code signing identity."
  desc "For testing purposes, the app is distributed with 'development' profile, faking the .entitlements file (see codesign.rb)"
  desc ""
  desc "Parameters:"
  desc "- build_number - build number"
  desc "Output:"
  desc "The result of the command is a `./build/ios` folder in the project root containing build artifacts:"
  desc "- .ipa, .jsbundle and sourcemaps (.jsbnudle.map)"
  lane :native do |options|

    # This is only required to export "development" builds (as long as there is no Apple Developer account)
    ios_hack_development_codesigning(options)

    artifacts = build(options)
    copy_artifacts(
      target_path: "#{BUILD_DIR}/ios",
      artifacts: [
        artifacts[:app_path],
        artifacts[:bundle_path],
        artifacts[:sourcemap_path],
      ],
    )

  end

  lane :version do |options|
  
    version = get_json_value(file: "#{PROJECT_DIR}/package.json", key: 'version').strip

    increment_version_number(xcodeproj: XCODEPROJ_PATH, version_number: version)
    actual_build_number = increment_build_number(xcodeproj: XCODEPROJ_PATH, build_number: options[:build_number])
  
    { version: version, build_number: actual_build_number }

  end

  private_lane :build do |options|

    cocoapods(
      podfile: "#{IOS_DIR}/Podfile",
      clean_install: true,
      verbose: verbose_logging_enabled(),
    )

    app_version = version(options)

    gym(
      clean: true,
      workspace: "#{IOS_DIR}/#{PROJECT_NAME}.xcworkspace",
      scheme: ENV['FASTLANE_BUILD_SCHEME'],
      configuration: ENV['FASTLANE_BUILD_TYPE'],
      export_method: ENV['FASTLANE_IOS_EXPORT_METHOD'],
      output_directory: BUILD_TMP_DIR,
      verbose: verbose_logging_enabled(),
    )

    sourcemaps = hermes_sourcemap(os: 'ios')

    { **app_version, **sourcemaps, app_path: lane_context[SharedValues::IPA_OUTPUT_PATH] }

  end

end
