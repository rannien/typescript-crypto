import Block from "./Block";

class Blockchain {
  blockchain: Block[];

  constructor() {
    this.blockchain = [this.createGenesisBlock()];
  }

  private createGenesisBlock() {
    return new Block(0, "first block on the chain", "0");
  }

  public getLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  public getLatestBlockHash() {
    return this.getLatestBlock().hash;
  }

  public addNewBlock(newBlock: Block) {
    newBlock.previousHash = this.getLatestBlockHash();
    this.blockchain.push(newBlock);
  }

  public validateChainIntegrity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const previousBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.generateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
