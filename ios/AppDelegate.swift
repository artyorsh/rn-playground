import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?

  var reactNativeDelegate: ReactNativeDelegate?
  var reactNativeFactory: RCTReactNativeFactory?

  private let integrations: [AppIntegration] = [
    FirebaseIntegration()
  ]

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
    let delegate = ReactNativeDelegate()
    let factory = RCTReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    reactNativeDelegate = delegate
    reactNativeFactory = factory

    window = UIWindow(frame: UIScreen.main.bounds)

    factory.startReactNative(
      withModuleName: "rnapp",
      in: window,
      launchOptions: launchOptions
    )

    self.integrations.forEach { i in i.app?(application, didFinishLaunchingWithOptions: launchOptions ?? [:]) }

    return true
  }

  func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    return self.integrations.reduce(false) { acc, i in
      return i.app?(app, open: url, options: options) ?? acc
    }
  }

  func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
    return self.integrations.reduce(false) { acc, i in
      return i.app?(application, continue: userActivity, restorationHandler: restorationHandler) ?? acc
    }
  }

  func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    self.integrations.forEach { i in i.app?(application, didRegisterForNotificationsWithToken: deviceToken) }
  }

  func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    self.integrations.forEach { i in i.app?(application, didFailToRegisterForNotificationsWithError: error) }
  }

  func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    self.integrations.forEach { i in i.app?(application, didReceiveNotification: userInfo, withHandler: completionHandler) }
  }
}

class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
  
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
    #if DEBUG
      RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
    #else
      Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }
}

@objc protocol AppIntegration {
  @objc optional func app(_ app: UIApplication, didFinishLaunchingWithOptions options: [UIApplication.LaunchOptionsKey : Any]) -> Void

  /* Linking */
  @objc optional func app(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any]) -> Bool
  @objc optional func app(_ app: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool

  /* Notifications */
  @objc optional func app(_ app: UIApplication, didRegisterForNotificationsWithToken token: Data) -> Void
  @objc optional func app(_ app: UIApplication, didReceiveNotification notification: [AnyHashable : Any], withHandler handler: @escaping (UIBackgroundFetchResult) -> Void) -> Void
  @objc optional func app(_ app: UIApplication, didFailToRegisterForNotificationsWithError error: Error)
  @objc optional func app(_ app: UNUserNotificationCenter, didReceiveNotificationResponse response: UNNotificationResponse, withHandler handler: @escaping () -> Void) -> Void
  @objc optional func app(_ app: UNUserNotificationCenter, willPresentNotification notification: UNNotification, withHandler handler: @escaping (UNNotificationPresentationOptions) -> Void) -> Void
}
