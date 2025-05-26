export class Message {
  text: string;
  status: string;

  constructor(text: string, status: string) {
    this.text = text;
    this.status = status;
  }

  empty() {
    return this.text === '';
  }
}
