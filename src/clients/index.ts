import { MockClient } from "./mock"

export interface IClient {
  get: <T>(endpoint: string) => Promise<T>;
}

export class Client implements IClient {
  internal: IClient;

  constructor() {
    this.internal = new MockClient();
  }

  get<T>(endpoint: string): Promise<T> {
    return this.internal.get(endpoint);
  }
}