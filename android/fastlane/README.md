fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## Android
### android test
```
fastlane android test
```
Runs all the tests
### android icons
```
fastlane android icons
```

### android buildProduction
```
fastlane android buildProduction
```
Deploy a new version to the Google Play
### android staging
```
fastlane android staging
```
Deploy a new version to the Google Play
### android production
```
fastlane android production
```
Deploy a new version to the Google Play
### android beta
```
fastlane android beta
```
Deploy a new version to the Google Play

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
