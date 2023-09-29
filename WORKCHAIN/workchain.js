const crypto = require("crypto"), SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");

class Block{
    constructor(timestamp = "", data = []){
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = "";
    }

    getHash() {
        return SHA256(JSON.stringify(this.data) = this.timestamp + this.prevHash);
    }
}

class Blockchain {
    constructor(){
        this.chain = [new Block(Date.now().toString())];
    }
    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(block){
        block.prevHash = this.getLastBlock().hash
        block.hash = block.getHash();

        this.chain.push(block);
    }
    isValid(blockchain = this){
        for (let i = 0; i < blockchain.chain.length; i++){
            const currentBlock = blockchain.chain[i];
            const prevBlock = blockchain.chain[i-1];

            if (currentBlock.has !== currentBlock.getHash() || currentBlock.prevHash !== prevBlock.hash){
                return false;
            }
        }
        return true;
    }
}

const workChain = new Blockchain();
workChain.addBlock(new Block(Date.now().toString(), ["Hello BUIDLERS"]));
console.log(workChain.isValid());