export const AppModule = {
  /* Services */
  LOG: Symbol.for('LogService'),
  NAVIGATION: Symbol.for('NavigationService'),
  PERMISSION: Symbol.for('PermissionService'),
  PUSH_NOTIFICATION: Symbol.for('PushNotificationService'),
  SESSION: Symbol.for('SessionService'),
  USER: Symbol.for('UserService'),

  /* Screens */
  SPLASH_SCREEN: Symbol.for('SplashScreen'),
  WELCOME_SCREEN: Symbol.for('WelcomeScreen'),
  LOGIN_SCREEN: Symbol.for('LoginScreen'),
  REGISTER_SCREEN: Symbol.for('RegisterScreen'),
  HOME_SCREEN: Symbol.for('HomeScreen'),
};
