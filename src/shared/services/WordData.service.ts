import { API_URI } from '../constant';

export class WordDataService {
  async get() {
    const res = await fetch(API_URI);
    return await res.json();
  }
}

export const wordDataService = new WordDataService();
