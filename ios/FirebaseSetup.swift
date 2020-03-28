import Foundation
import Firebase

@objc class FirebaseSetup: NSObject{
  @objc public func initProject() {
    
    let bundleID = Bundle.main.bundleIdentifier
    let googleFilePath = bundleID == "io.komak.app" ? "GoogleService-Info-Production" : bundleID == "io.komak.app.staging" ? "GoogleService-Info-Staging" : bundleID == "io.komak.app.dev" ? "GoogleService-Info-Dev" : ""
    
    let filePath = Bundle.main.path(forResource: googleFilePath, ofType: "plist")
    guard let fileopts = FirebaseOptions(contentsOfFile: filePath!)
      else {
        print("Couldn't load config file")
        return;
    }

    FirebaseApp.configure(options: fileopts)
  }
}
