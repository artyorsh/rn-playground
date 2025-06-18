import { ISession } from '..';

export interface ISessionModule {
  readonly moduleIdentifier: string;
  initialize(session: ISession): Promise<void>;
  destroy(): Promise<void>;
}
