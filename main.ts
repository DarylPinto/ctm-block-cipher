import chunkUint8Array from "./util/chunkUint8Array.ts";
import concatUint8Arrays from "./util/concatUint8Arrays.ts";
import encrypt from "./util/encrypt.ts";
import xor from "./util/xor.ts";
import config from "./config.ts";

// Check config to determine whether to encrypt or decrypt
let inFile = config.textFile;
let outFile = config.encryptedFile;
if (config.mode === "decrypt") {
  inFile = config.encryptedFile;
  outFile = config.textFile;
}

// Encryption/decryption settings
const BLOCK_SIZE_BITS = 256;
const SECRET_KEY = config.secretKey;
const NONCE = config.nonce;

// Load input
const MESSAGE_BYTES = await Deno.readFile(inFile);

// Chunk input into blocks of 256 bits
const blockSizeBytes = BLOCK_SIZE_BITS / 8;
const blocks = chunkUint8Array(MESSAGE_BYTES, blockSizeBytes);

// Go through each block and encode/decode it
let cipheredBlockArray: Uint8Array[] = [];
blocks.forEach((block, i) => {
  const counter = NONCE + i;
  const cipheredCounter = encrypt(counter.toString(), SECRET_KEY);
  const cipheredBlock = xor(cipheredCounter, block);
  cipheredBlockArray.push(cipheredBlock);
});

// Concatenate encoded blocks and write to file
const output = concatUint8Arrays(cipheredBlockArray);
await Deno.writeFile(outFile, output);

// Log results
const crypt = config.mode === "decrypt" ? "decrypted" : "encrypted";
console.log(`Done! ${inFile} has been ${crypt} and written to ${outFile}!`);
