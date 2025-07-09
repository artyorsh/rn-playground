import { Platform } from 'react-native';
// import Config from 'react-native-config';
// import RNDeviceInfo from 'react-native-device-info';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';

import { ILogTransporter, LogService } from './log.service';
import { ConsoleLogTransporter } from './transporters/console-log-transporter';
import { FileLogTransporter } from './transporters/file-log-transporter';
import { GrafanaLogTransporter } from './transporters/grafana-log-transporter';

export type ILogLevel =
 | 'debug'
 | 'info'
 | 'warn'
 | 'error';

export type ILogPayload = Record<string, string>;

export interface ILogService {
  log(tag: string, message: string, level: ILogLevel, payload?: ILogPayload): void;
  debug(tag: string, message: string, payload?: ILogPayload): void;
  info(tag: string, message: string, payload?: ILogPayload): void;
  warn(tag: string, message: string, payload?: ILogPayload): void;
  error(tag: string, message: string, payload?: ILogPayload): void;
  addLabel(key: string, value: string): void;
  removeLabel(key: string): void;
  flush(): void;
}

export const LogModule = new ContainerModule(bind => {
  bind<ILogService>(AppModule.LOG)
    .toDynamicValue(context => createLogger(context))
    .inSingletonScope();
});

const createLogger = (_context: interfaces.Context): ILogService => {
  // const grafanaAppId: string = `rnapp_${Platform.OS}_${Config.RNAPP_ENV_NAME}`;

  // const deviceName: string = RNDeviceInfo.getDeviceNameSync();
  // const deviceModel: string = RNDeviceInfo.getModel();
  // const deviceBrand: string = RNDeviceInfo.getBrand();
  // const systemVersion: string = RNDeviceInfo.getSystemVersion();
  // const appVersion: string = RNDeviceInfo.getVersion();

  const consoleTransporter: ILogTransporter = new ConsoleLogTransporter();
  const fileTransporter: ILogTransporter = new FileLogTransporter('app.log');
  const grafanaTransporter: ILogTransporter = new GrafanaLogTransporter({
    hostUrl: Config.RNAPP_GRAFANA_HOST || '',
  });

  return new LogService({
    defaultLabels: {
      // app: grafanaAppId,
      // version: appVersion,
      // runtime: `${deviceName}/${Platform.OS}/${systemVersion}/${deviceBrand}/${deviceModel}`,
    },
    transporters: [consoleTransporter, fileTransporter, grafanaTransporter],
  });
};
