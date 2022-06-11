import sha256 from 'crypto-js/sha256';

export default class Block {
  public hash: string;

  constructor(
    private index: Number,
    private data: Object,
    public previousHash: string,
    private date: Date = new Date(),
  ) {
    this.hash = this.generateHash();
  }

  public generateHash(): string {
    const serializedData = JSON.stringify(this.data);
    const timestamp = this.date.getTime();
    const content = this.index.toString() + timestamp + this.previousHash + serializedData;
    return sha256(content).toString();
  }
}
