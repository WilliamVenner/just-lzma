type Mode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

declare module "just-lzma" {
  export default class LZMA {
    /** @param mode defaults to 9 */
    compress: (
      input: string | Uint8Array | ArrayBuffer,
      mode?: Mode
    ) => Uint8Array;
    /**
     * By default, the result will be returned as a string if it decodes
     * as valid UTF-8 text; otherwise, it will return a Uint8Array instance.
     **/
    decompress: (
      byteArray: Uint8Array | ArrayBuffer
    ) => string | Uint8Array;
  }
}
