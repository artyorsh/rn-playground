import { Platform } from 'react-native';
import * as Application from 'expo-application';
import * as Device from 'expo-device';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';

import { ILogTransporter, LogService } from './log.service';
import { ConsoleLogTransporter } from './transporters/console-log-transporter';
import { FileLogTransporter } from './transporters/file-log-transporter';

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
  const grafanaAppId: string = `rnapp_${Platform.OS}_${process.env.EXPO_PUBLIC_ENV_NAME}`;

  const deviceName: string = Device.deviceName;
  const deviceModel: string = Device.modelName;
  const deviceBrand: string = Device.brand;
  const systemVersion: string = Device.osVersion;
  const appVersion: string = `${Application.nativeApplicationVersion} (${Application.nativeBuildVersion})`;

  const consoleTransporter: ILogTransporter = new ConsoleLogTransporter();
  const fileTransporter: ILogTransporter = new FileLogTransporter('app-1.log');
  // const grafanaTransporter: ILogTransporter = new GrafanaLogTransporter({
  //   hostUrl: process.env.EXPO_PUBLIC_GRAFANA_HOST || '',
  // });

  return new LogService({
    flushInterval: 10_000,
    defaultLabels: {
      app: grafanaAppId,
      version: appVersion,
      runtime: `${deviceName}/${Platform.OS}/${systemVersion}/${deviceBrand}/${deviceModel}`,
    },
    transporters: [
      consoleTransporter,
      fileTransporter,
      // grafanaTransporter,
    ],
  });
};
