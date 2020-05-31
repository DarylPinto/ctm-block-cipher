/**
 * Splits a large Uint8Array into chunks of smaller Uint8Arrays.
 * Last chunk will be padded with 0s if it's too short
 *
 * @param buffer - Array of bytes
 * @param len - Length of each chunk (in bytes)
 */
const chunkUint8Array = (buffer: Uint8Array, len: number): Uint8Array[] => {
  const chunkCount = Math.ceil(buffer.length / len);
  let chunks = [];

  for (let i = 0; i < chunkCount; i++) {
    const startIndex = len * i;
    const lastIndex = len * i + len;
    let initialChunk = buffer.subarray(startIndex, lastIndex);
    let chunk;

    // Pad last chunk
    if (initialChunk.length < len) {
      chunk = new Uint8Array(new ArrayBuffer(len));
      chunk.set(initialChunk, 0);
    } else {
      chunk = initialChunk;
    }

    chunks.push(chunk);
  }

  return chunks;
};

export default chunkUint8Array;
