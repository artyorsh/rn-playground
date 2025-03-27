platform :android do

  desc "Builds .apk or .aab and stores it in the `./build` folder"
  desc "Important: the .apk/.aab is not installable on a real device unless signed with non-debug .keystore"
  desc "See https://developer.android.com/studio/publish/app-signing#generate-key"
  desc ""
  desc "Parameters:"
  desc "- build_number - build number"
  desc "Output:"
  desc "The result of the command is a `./build/android` folder in the project root containing build artifacts:"
  desc "- .apk or .aab, .bundle and sourcemaps (.bundle.map)"
  lane :native do |options|

    artifacts = build(options)
    copy_artifacts(
      target_path: "#{BUILD_DIR}/android",
      artifacts: [
        artifacts[:app_path],
        artifacts[:bundle_path],
        artifacts[:sourcemap_path],
      ],
    )
  
  end

  lane :version do |options|

    version = get_json_value(file: "#{PROJECT_DIR}/package.json", key: 'version').strip
    actual_build_number = increment_build_number(xcodeproj: XCODEPROJ_PATH, build_number: options[:build_number])

    android_set_version_name(gradle_file: "#{ANDROID_DIR}/app/build.gradle", version_name: version)
    android_set_version_code(gradle_file: "#{ANDROID_DIR}/app/build.gradle", version_code: actual_build_number)

    { version: version, build_number: actual_build_number }

  end

  private_lane :build do |options|

    gradle(project_dir: ANDROID_DIR, task: 'clean', print_command_output: verbose_logging_enabled)

    app_version = version(options)

    gradle(
      project_dir: ANDROID_DIR,
      task: ENV['FASTLANE_ANDROID_BUILD_TASK'],
      flavor: ENV['FASTLANE_BUILD_SCHEME'],
      build_type: ENV['FASTLANE_BUILD_TYPE'],
      properties: android_codesign_properties(options),
      print_command: debug_logging_enabled,
      print_command_output: verbose_logging_enabled,
    )

    is_aab = ENV['FASTLANE_ANDROID_BUILD_TASK'] == 'bundle'

    app_path = is_aab ? SharedValues::GRADLE_AAB_OUTPUT_PATH : SharedValues::GRADLE_APK_OUTPUT_PATH
    sourcemaps = hermes_sourcemap(os: 'android')

    { **app_version, **sourcemaps, app_path: lane_context[app_path] }

  end

end
