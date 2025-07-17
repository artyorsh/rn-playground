import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: process.env.APP_NAME,
    slug: 'rnapp',
    newArchEnabled: true,
    android: {
      ...config.android,
      edgeToEdgeEnabled: true,
      googleServicesFile: process.env.GOOGLE_SERVICES_FILE_ANDROID ?? './.firebase/google-services.json',
      package: process.env.BUNDLE_IDENTIFIER,
      permissions: ['android.permission.POST_NOTIFICATIONS'],
    },
    ios: {
      ...config.ios,
      bundleIdentifier: process.env.BUNDLE_IDENTIFIER,
      entitlements: {
        'aps-environment': process.env.NOTIFICATIONS_IOS_APS_ENVIRONMENT,
      },
      googleServicesFile: process.env.GOOGLE_SERVICES_FILE_IOS ?? './.firebase/GoogleService-Info.plist',
    },
    extra: {
      eas: {
        projectId: '9fe3a870-cac3-4d43-a6a3-a291cd5fb90c',
      },
    },
    updates: {
      url: 'https://u.expo.dev/9fe3a870-cac3-4d43-a6a3-a291cd5fb90c',
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    orientation: 'portrait',
    plugins: [
      'expo-secure-store',
      '@react-native-firebase/app',
      '@react-native-firebase/messaging',
      [
        'expo-build-properties',
        {
          ios: {
            useFrameworks: 'static',
          },
        },
      ],
    ],
  };
};
