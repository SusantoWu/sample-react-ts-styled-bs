import { MockClient } from "./mock"
import { RestClient } from "./rest";

export interface IClient {
  get: <T>(endpoint: string) => Promise<T>;
}

export class Client implements IClient {
  internal: IClient;

  constructor() {
    debugger
    this.internal = process.env.REACT_APP_MOCK ? new MockClient() : new RestClient();
  }

  get<T>(endpoint: string): Promise<T> {
    debugger
    return this.internal.get(endpoint);
  }
}