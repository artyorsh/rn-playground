import { LogBox } from 'react-native';

import { ILogOptions, ILogTransporter } from '../model';

interface IGrafanaLogTransporterOptions {
  hostUrl: string;
}

export class GrafanaLogTransporter implements ILogTransporter {

  public readonly id: string = '@log/grafana';

  constructor(private options: IGrafanaLogTransporterOptions) {
    LogBox.ignoreAllLogs();
  }

  public transport = (tag: string, message: string, options?: ILogOptions): void => {
    const timestampNs: number = Date.now() * 1000000;

    fetch(`${this.options.hostUrl}/loki/api/v1/push`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        streams: [
          {
            stream: { app: 'rnapp', tag, level: options?.level || 'debug' },
            values: [[timestampNs.toString(), `[${tag}] ${message}`]],
          },
        ],
      }),
    }).catch((error) => {
      console.error('Failed to send logs to Loki:', error);
    });
  };

  public flush = (): void => {
    // no-op
  };
}
