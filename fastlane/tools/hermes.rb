BUNDLE_OUTPUT_ANDROID = 'index.android.bundle'
BUNDLE_OUTPUT_IOS = 'main.jsbundle'

# See https://docs.sentry.io/platforms/react-native/manual-setup/hermes
def hermes_sourcemap(os:, **options)

  bundle_output_file_name = os == 'ios' ? BUNDLE_OUTPUT_IOS : BUNDLE_OUTPUT_ANDROID
  bundle_output_file_path = "#{BUILD_TMP_DIR}/#{bundle_output_file_name}"

  sh(
    command: [
      "#{PROJECT_DIR}/node_modules/.bin/react-native bundle",
      "--dev false",
      "--platform #{os}",
      "--entry-file #{PROJECT_DIR}/index.js",
      "--bundle-output #{bundle_output_file_path}",
      "--sourcemap-output #{bundle_output_file_path}.map",
      "--minify false",
    ].join(' '),
  )
  
  sh(
    command: [
      "#{PROJECT_DIR}/node_modules/react-native/sdks/hermesc/osx-bin/hermesc",
      "-O",
      "-emit-binary",
      "-output-source-map",
      "-out #{bundle_output_file_path}.hbc",
      bundle_output_file_path,
    ].join(' '),
  )
  
  sh("rm -f #{bundle_output_file_path}")
  sh("mv #{bundle_output_file_path}.hbc #{bundle_output_file_path}")

  sh(
    command: [
      "node #{PROJECT_DIR}/node_modules/react-native/scripts/compose-source-maps.js",
      "#{bundle_output_file_path}.map",
      "#{bundle_output_file_path}.hbc.map",
      "-o #{bundle_output_file_path}.map",
    ].join(' '),
  )

  { bundle_path: bundle_output_file_path, sourcemap_path: "#{bundle_output_file_path}.map" }

end