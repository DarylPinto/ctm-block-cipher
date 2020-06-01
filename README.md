# Block Cipher (Counter Mode)

This program implements a CTR/counter mode block cipher ([as described in this video](https://youtu.be/Rk0NIQfEXBA)) using Typescript & the [Deno runtime.](https://deno.land/)

## Encryption

```bash
deno run --allow-read --allow-write main.ts
```
will encrypt the contents of `text.txt`

## Decryption
This algorthim is reversable, meaning that the program can also decrypt a file as long as the same `nonce` and `secretKey` are used. Therefore, if you run the command from the previous section again you can decrypt the file you just encrypted.

## How does it work? 
[Watch this video by Dr. Mike Pound](https://youtu.be/Rk0NIQfEXBA) to learn about the algorithm.

[![Algorithm](https://i.imgur.com/H3f5EP0.png)](https://youtu.be/Rk0NIQfEXBA)

## Requirements

- [Deno](https://deno.land/)

## Disclaimer

**This is purely a hobbyist's amateur implementation, and should not be used in any production application or on any important files. Use at your own risk.**

## License

MIT
