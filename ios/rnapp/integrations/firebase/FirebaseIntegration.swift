import UIKit
import FirebaseCore

/*
 * Configures Firebase via GoogleService-Info.plist
 * The .plist file chosen at runtime depends on Build Configuration
 * @see Build Settings -> FIREBASE_CONFIG_FILE and Build Phases -> Copy Build Schema Resources
 *
 * Push notification handling is not configured here - done via AppDelegate swizzling
 * @see https://firebase.google.com/docs/cloud-messaging/ios/client#method_swizzling_in_firebase_messaging
 */
class FirebaseIntegration: AppIntegration {

  func app(_ app: UIApplication, didFinishLaunchingWithOptions options: [UIApplication.LaunchOptionsKey : Any]) {
    FirebaseApp.configure()
  }
}
