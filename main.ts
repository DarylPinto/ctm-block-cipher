import chunkUint8Array from "./util/chunkUint8Array.ts";
import concatUint8Arrays from "./util/concatUint8Arrays.ts";
import encrypt from "./util/encrypt.ts";
import xor from "./util/xor.ts";
import config from "./config.ts";

import { __ } from "https://deno.land/x/dirname/mod.ts";
const { __dirname } = __(import.meta);

console.log("Working...");

// Encryption/decryption settings
const TARGET_FILE = `${__dirname}/${config.targetFile}`;
const SECRET_KEY = config.secretKey;
const NONCE = config.nonce;

// Load input
const MESSAGE_BYTES = await Deno.readFile(TARGET_FILE);

// Chunk input into blocks of 256 bits
const BLOCK_SIZE_BITS = 256;
const BLOCK_SIZE_BYTES = BLOCK_SIZE_BITS / 8;
const blocks = chunkUint8Array(MESSAGE_BYTES, BLOCK_SIZE_BYTES);

// Go through each block and encode it
let cipheredBlockArray: Uint8Array[] = [];
blocks.forEach((block, i) => {
  const counter = NONCE + i;
  const cipheredCounter = encrypt(counter.toString(), SECRET_KEY);
  const cipheredBlock = xor(cipheredCounter, block);
  cipheredBlockArray.push(cipheredBlock);
});

// Concatenate encoded blocks and write to file
const output = concatUint8Arrays(cipheredBlockArray);
await Deno.writeFile(TARGET_FILE, output);

// Log results
console.log(`Done! Wrote to ${TARGET_FILE}!`);
