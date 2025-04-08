# just-lzma

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![bundlephobia][bundlephobia-badge]][bundlephobia]
[![MIT License][license-badge]][license]

`just-lzma` is a JavaScript implementation of the Lempel-Ziv-Markov (LZMA) chain compression algorithm.

No web workers. No async. ES6 compatible. Just LZMA!

**The codebase is a fork of [LZMA-JS](https://github.com/nmrugg/LZMA-JS) written by [Nathan Rugg](https://github.com/nmrugg).**

## Install

```sh
yarn add just-lzma
```

## Usage

```js
import lzma from "just-lzma";

const str = "Hello World";

const compressed = lzma.compress(str);

const decompressed = lzma.decompress(compressed);

console.log(str === decompressed); // -> true
```

You can also set the compression level on `compress` via an optional second parameter:

```js
// value ranges from `1` (fastest) to `9` best
const compressed = lzma.compress("Hello World", 1);
```

## Typescript

The repo has typescript support. You can view the types in [`index.d.ts`](https://github.com/WilliamVenner/just-lzma/blob/main/index.d.ts).

## Compatibility

`just-lzma` is compatible with the reference implementation of LZMA, for example, the `lzma` command.

## License

[MIT](https://github.com/WilliamVenner/just-lzma/blob/main/LICENSE)

[build-badge]: https://img.shields.io/circleci/build/github/WilliamVenner/just-lzma.svg?style=flat-square
[build]: https://app.circleci.com/pipelines/github/WilliamVenner/just-lzma
[version-badge]: https://img.shields.io/npm/v/just-lzma.svg?style=flat-square
[package]: https://www.npmjs.com/package/just-lzma
[license-badge]: https://img.shields.io/npm/l/just-lzma.svg?style=flat-square
[license]: https://github.com/WilliamVenner/just-lzma/blob/master/LICENSE
[bundlephobia]: https://bundlephobia.com/result?p=just-lzma
[bundlephobia-badge]: https://img.shields.io/bundlephobia/minzip/just-lzma@latest?style=flat-square
