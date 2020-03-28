import DeviceInfo from 'react-native-device-info';
import Config from 'react-native-config';
import { Platform, Alert } from 'react-native';

type EnvironmentType = 'development' | 'staging' | 'production';

const codePushStagingDeploymentKey =
  Platform.OS === 'android'
    ? Config.AndroidCodePushDeploymentKeyStaging
    : Config.IOSCodePushDeploymentKeyStaging;

const codePushProductionDeploymentKey =
  Platform.OS === 'android'
    ? Config.AndroidCodePushDeploymentKeyProduction
    : Config.IOSCodePushDeploymentKeyProduction;

export class Environment {
  public static bundleId = DeviceInfo.getBundleId();

  public static environment: EnvironmentType =
    Environment.bundleId === 'io.komak.app.dev'
      ? 'development'
      : Environment.bundleId === 'io.komak.app.staging'
      ? 'staging'
      : Environment.bundleId === 'io.komak.app'
      ? 'production'
      : null;

  private static getValue(envs: {
    development?: string;
    staging?: string;
    production?: string;
  }) {
    return envs[Environment.environment];
  }

  public static apiUrl = Environment.getValue({
    development: 'https://api-staging.komak.io',
    staging: 'https://api-staging.komak.io',
    production: 'https://api.komak.io',
  });

  public static codePushDeploymentKey = Environment.getValue({
    production: codePushProductionDeploymentKey,
    staging: codePushStagingDeploymentKey,
  });

  public static iosGoogleClientId = Environment.getValue({
    production:
      '50726922019-rm0ehq9702sgre48e6c6anou4sk6i4jg.apps.googleusercontent.com',
    staging:
      '50726922019-bqbdkl3np1cv4uitoiqhhqjc4f21g1vn.apps.googleusercontent.com',
    development:
      '50726922019-5cff1qhkilhft8jtaecj7gqeo980pghe.apps.googleusercontent.com',
  });

  // public static androidGoogleClientId = Environment.getValue({
  //   production:
  //     '50726922019-2n2928603iapbq7kslc4leo7ikgs5l7b.apps.googleusercontent.com',
  //   staging:
  //     '50726922019-b6ql0i33agaodg5ddjnl1ldmcm61b9ab.apps.googleusercontent.com',
  //   development:
  //     '50726922019-3mba9hr53ob7dbj43s658gr92i5ndsf3.apps.googleusercontent.com',
  // });
}
