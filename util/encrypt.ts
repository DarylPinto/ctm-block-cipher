import { HmacSha256 } from "https://deno.land/std@v0.53.0/hash/sha256.ts";

/**
 * Hashes a message using a secret key.
 *
 * Ideally we would want this to _encrypt_ instead of _hash_,
 * but since decryption is not needed and the deno std lib
 * includes hashing functions, this will work fine for our use case.
 *
 * @param message - Message to encrypt
 * @param key - Secret key
 */
const encrypt = (message: string, key: string): Uint8Array => {
  const sha = new HmacSha256(key);
  sha.update(message); 
  return new Uint8Array(sha.arrayBuffer());
};

export default encrypt;
