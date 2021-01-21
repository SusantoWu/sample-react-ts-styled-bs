import { IClient } from 'clients';

const API_MAPPING: { [key: string]: string } = {
  '/accounts': 'accounts',
  '/accounts/([0-9]+)/transactions': 'transactions-$1'
};

export class MockClient implements IClient {
  get<T>(endpoint: string): Promise<T> {
    return import(`./mocks/${this.filename(endpoint)}.json`).then(module => module.default);
  }

  private filename(endpoint: string): string {
    for (let key in API_MAPPING) {
      const regex = new RegExp(`^${key}$`);
      const matches = endpoint.match(regex);
      if (matches) {
        return matches[0].replace(regex, API_MAPPING[key]);
      }
    }
    return endpoint;
  }
}