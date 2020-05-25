/**
 * Chunk a string `text` into blocks of size `len`.
 * Last chunk will be padded. Padding character can
 * be changed by providing the `padding` arg
 *
 * @param text - Text to chunk
 * @param len - How long each chunk should be
 * @param padding - Character to pad end of last chunk
 */
const chunkText = (
  text: string,
  len: number,
  padding: string = "0"
): string[] => {
  let chunks = [];

  const iterations = Math.ceil(text.length / len);

  for (let i = 0; i < iterations; i++) {
    let chunk = text.slice(len * i, len * (i + 1));
    if (chunk.length < len) chunk = chunk.padEnd(len, padding);
    chunks.push(chunk);
  }

  return chunks;
};

export default chunkText;
