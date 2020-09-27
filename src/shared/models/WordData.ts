import {API_URI} from "../constant";

export class WordData {
  async get() {
    const res = await fetch(API_URI);
    return await res.json();
  }
}

export const wordData = new WordData();
