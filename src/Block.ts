import sha256 from 'crypto-js/sha256';

class Block {
  private hash: string;

  constructor(
    private index: string,
    private data: Object,
    private previousHash: string,
    private date: Date = new Date()
  ) {
    this.hash = this.generateHash();
  }

  private generateHash(): string {
    const content = this.index + this.date.getTime() + this.previousHash + JSON.stringify(this.data);
    return sha256(content).toString();
  }
}