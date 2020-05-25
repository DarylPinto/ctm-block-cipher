import countBytes from "./util/countBytes.ts";
import chunkText from "./util/chunkText.ts";
import encrypt from "./util/encrypt.ts";

const PLAIN_TEXT = `"It is not my intention to be fulsome, but I confess that I covet your skull." Sherlock Holmes waved our strange visitor into a chair. "You are an enthusiast in your line of thought, I perceive, sir, as I am in mine," said he. "I observe from your forefinger that you make your own cigarettes."`;
const CHAR_SIZE_BITS = countBytes("a") * 8;
const BLOCK_SIZE_BITS = 128;

const secretKey = "abc";
const nonce = 1234;

const blockSize = BLOCK_SIZE_BITS / CHAR_SIZE_BITS;
const blocks = chunkText(PLAIN_TEXT, blockSize);

let cipherBlocks: string[] = [];
blocks.forEach((_, i) => {
  const counter = nonce + i + 1;
  const cipherBlock = encrypt(counter.toString(), secretKey);
  cipherBlocks.push(cipherBlock);
});

console.log(cipherBlocks);
