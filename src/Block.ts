import sha256 from 'crypto-js/sha256';

class Block {
  private hash: string;

  constructor(
    private index: string,
    private data: Object,
    private previousHash: string,
    private date: Date = new Date(),
  ) {
    this.hash = this.generateHash();
  }

  private generateHash(): string {
    const serializedData = JSON.stringify(this.data);
    const content = this.index + this.date.getTime() + this.previousHash + serializedData;
    return sha256(content).toString();
  }
}
