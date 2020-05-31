import countBytes from "./util/countBytes.ts";
import chunkText from "./util/chunkText.ts";
import encrypt from "./util/encrypt.ts";
import xor from "./util/xor.ts";
import concatUint8Arrays from "./util/concatUint8Arrays.ts";
import config from "./config.ts";

const PLAIN_TEXT = await Deno.readTextFile(config.inFile);
const CHAR_SIZE_BITS = countBytes("a") * 8;
const BLOCK_SIZE_BITS = 256;

const SECRET_KEY = config.secretKey;
const NONCE = config.nonce;

// Chunk plaintext into blocks of 256 bits
const textEncoder = new TextEncoder();
const blockSize = BLOCK_SIZE_BITS / CHAR_SIZE_BITS;
const plainTextChunks = chunkText(PLAIN_TEXT, blockSize);

// Go through each plaintext message chunk and encode it
let cipheredBlockArray: Uint8Array[] = [];
plainTextChunks.forEach((textChunk, i) => {
  const counter = NONCE + i + 1;
  const cipheredCounter = encrypt(counter.toString(), SECRET_KEY);
  const messageBlock = textEncoder.encode(textChunk);
  const cipheredBlock = xor(cipheredCounter, messageBlock);
  cipheredBlockArray.push(cipheredBlock);
});

// Concatenate encoded blocks and write to file
const output = concatUint8Arrays(cipheredBlockArray);
await Deno.writeFile(config.outFile, output);
console.log(`Done, wrote to ${config.outFile}!`);
