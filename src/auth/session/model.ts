export interface ISession {
  userId: string;
  secret: string;
}

export interface ISessionInitializer {
  initialize(session: ISession): Promise<void>;
  destroy(): Promise<void>;
}

export interface ISessionService {
  login(email: string, password: string): Promise<ISession>;
  register(email: string, password: string): Promise<ISession>;
  refresh(): Promise<ISession>;
  restore(): Promise<ISession>;
  logout(): Promise<void>;
}
