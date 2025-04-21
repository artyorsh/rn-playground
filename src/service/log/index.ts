import { Platform } from 'react-native';
import Config from 'react-native-config';
import RNDeviceInfo from 'react-native-device-info';
import { AppModule } from '@di/model';
import { ContainerModule } from 'inversify';

import { LogService } from './log.service';
import { ILogService, ILogTransporter } from './model';
import { ConsoleLogTransporter } from './transporters/console-log-transporter';
import { FileLogTransporter } from './transporters/file-log-transporter';
import { GrafanaLogTransporter } from './transporters/grafana-log-transporter';

export const LogModule = new ContainerModule(bind => {
  const grafanaAppId: string = `rnapp_${Platform.OS}_${Config.RNAPP_ENV_NAME}`;

  const deviceName: string = RNDeviceInfo.getDeviceNameSync();
  const deviceModel: string = RNDeviceInfo.getModel();
  const deviceBrand: string = RNDeviceInfo.getBrand();
  const systemVersion: string = RNDeviceInfo.getSystemVersion();
  const appVersion: string = RNDeviceInfo.getVersion();

  const consoleTransporter: ILogTransporter = new ConsoleLogTransporter();
  const fileTransporter: ILogTransporter = new FileLogTransporter('app.log');
  const grafanaTransporter: ILogTransporter = new GrafanaLogTransporter({
    hostUrl: Config.RNAPP_GRAFANA_HOST || '',
  });

  const logService = new LogService({
    defaultLabels: {
      app: grafanaAppId,
      version: appVersion,
      runtime: `${deviceName}/${Platform.OS}/${systemVersion}/${deviceBrand}/${deviceModel}`,
    },
    transporters: [consoleTransporter, fileTransporter, grafanaTransporter],
  });

  bind<ILogService>(AppModule.LOG).toConstantValue(logService);
});
