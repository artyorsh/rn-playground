import * as SecureStore from 'expo-secure-store';

import { AnyAuthenticationToken, IAuthenticationStorage } from './session.service';

export class SecureAuthStorage implements IAuthenticationStorage<AnyAuthenticationToken> {

  private static KEY_TOKEN: string = 'token';

  public getToken(): Promise<AnyAuthenticationToken | null> {
    return SecureStore.getItemAsync(SecureAuthStorage.KEY_TOKEN).then((token) => {
      if (!token) {
        return null;
      }

      try {
        return JSON.parse(token);
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }

  public setToken(token: AnyAuthenticationToken): Promise<void> {
    return SecureStore.setItemAsync(SecureAuthStorage.KEY_TOKEN, JSON.stringify(token));
  }

  public clear(): Promise<void> {
    return SecureStore.deleteItemAsync(SecureAuthStorage.KEY_TOKEN);
  }
}

