/**
 * Similar to Array.join("") but for Uint8Arrays. Returns a concatenated
 * Uint8Array
 *
 * @param Uint8ArrayList - Array of Uint8Arrays to concatenate together
 */
const concatUint8Arrays = (Uint8ArrayList: Uint8Array[]): Uint8Array => {
  const totalByteLength = Uint8ArrayList.reduce(
    (acc, buffer) => acc + buffer.byteLength,
    0
  );
  let outputBuffer = new Uint8Array(new ArrayBuffer(totalByteLength));

  Uint8ArrayList.forEach((buffer, i) => {
    const offset = buffer.length * i;
    outputBuffer.set(buffer, offset);
  });

  return outputBuffer;
};

export default concatUint8Arrays;
