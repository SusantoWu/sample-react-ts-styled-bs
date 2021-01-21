import { IClient } from 'clients';

// Implement HTTP request library. eg. Axios, fetch API
export class RestClient implements IClient {
  get<T>(endpoint: string): Promise<T> {
    return new Promise((resolve, reject) => { });
  }
}