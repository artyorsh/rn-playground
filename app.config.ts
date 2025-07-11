import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const bundleIdentifier: string = process.env.RNAPP_APP_ID;

  return {
    ...config,
    name: 'rnapp',
    slug: 'rnapp',
    newArchEnabled: true,
    android: {
      ...config.android,
      edgeToEdgeEnabled: true,
      googleServicesFile: './google-services.json',
      package: bundleIdentifier,
      permissions: ['android.permission.POST_NOTIFICATIONS'],
    },
    ios: {
      ...config.ios,
      bundleIdentifier: bundleIdentifier,
      entitlements: {
        'aps-environment': 'development',
      },
      googleServicesFile: './GoogleService-Info.plist',
    },
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
