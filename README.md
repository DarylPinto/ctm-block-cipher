# Block Cipher (Counter Mode)

This program implements a CTR/counter mode block cipher ([as described in this video](https://youtu.be/Rk0NIQfEXBA)) using Typescript & the [Deno runtime.](https://deno.land/)

## Encryption

1. Add your plaintext into `text.txt`
2. `deno run --allow-read --allow-write main.ts`
3. Encrypted content will be written to `encrypted.bin`

## Decryption
This algorthim is reversable, meaning that you can run it again on the output to get the corresponding input.

To make this easy, all you have to do is set the `mode` in `config.ts` to `"decrypt"` and run the same command from above. This will decrypt the content from `encrypted.bin` and write it into `text.txt`

## How does it work? 
[Watch this video by Dr. Mike Pound](https://youtu.be/Rk0NIQfEXBA) to learn about the algorithm.

[![Algorithm](https://i.imgur.com/H3f5EP0.png)](https://youtu.be/Rk0NIQfEXBA)

## Requirements

- [Deno](https://deno.land/)

## Disclaimer

**This is purely a hobbyist's amateur implementation, and should not be used in any production application.**
