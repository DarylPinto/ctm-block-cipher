/**
 * Calculates the byte size of any UTF-8 string passed in.
 * From SO: stackoverflow.com/a/12205668/7003127
 * 
 * @param text - UTF-8 string to count bytes of 
 */
const byteCount = (text: string): number => encodeURI(text).split(/%..|./).length - 1;

export default byteCount;
