/**
 * XORs two Uint8Array's with each other, and returns the result
 * 
 * @param buffer1 - First buffer to XOR
 * @param buffer2 - Second buffer to XOR
 */
const xor = (buffer1: Uint8Array, buffer2: Uint8Array): Uint8Array => {
  let outputBuffer = new Uint8Array(new SharedArrayBuffer(buffer1.length));
  outputBuffer.set(buffer1, 0);

  for (let i = 0; i < outputBuffer.length; i++) {
    Atomics.xor(outputBuffer, i, buffer2[i]);
  }

  return outputBuffer;
};

export default xor;
