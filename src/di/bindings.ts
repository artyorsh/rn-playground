import { Platform } from 'react-native';
import RNDeviceInfo from 'react-native-device-info';
import { ContainerModule } from 'inversify';

import { INavigationService } from '../service/navigation/model';
import { NavigationService } from '../service/navigation/navigation.service';
import { AppModule } from './container';
import { LogService } from '../service/log/log.service';
import { ConsoleLogTransporter } from '../service/log/transporters/console-log-transporter';
import { FileLogTransporter } from '../service/log/transporters/file-log-transporter';
import { GrafanaLogTransporter } from '../service/log/transporters/grafana-log-transporter';
import { ILogService } from '../service/log/model';

export const createModules = (): ContainerModule[] => {

  const mainModule = new ContainerModule(bind => {
    const deviceName: string = RNDeviceInfo.getDeviceNameSync();
    const deviceModel: string = RNDeviceInfo.getModel();
    const deviceBrand: string = RNDeviceInfo.getBrand();
    const systemVersion: string = RNDeviceInfo.getSystemVersion();
    const appVersion: string = RNDeviceInfo.getVersion();

    const logService = new LogService({
      transporters: [
        new ConsoleLogTransporter(),
        new FileLogTransporter('app.log'),
        new GrafanaLogTransporter({
          hostUrl: 'http://localhost:3100',
          labels: {
            app: 'rnapp',
            version: appVersion,
            runtime: `${deviceName}/${Platform.OS}/${systemVersion}/${deviceBrand}/${deviceModel}`,
          },
        }),
      ],
    });

    bind<INavigationService>(AppModule.NAVIGATION).toConstantValue(new NavigationService(logService));
    bind<ILogService>(AppModule.LOG).toConstantValue(logService);
  });

  return [mainModule];
};
