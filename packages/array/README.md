# `array`

- [x] unique

## Install

```bash
npm install --save-dev @dsdash/array
```

## Usage

### unique

```js
const array = require('@dsdash/array');
const { unique } = array;
const list = [1,2,3,1];
const newList = unique(list) // [1,2,3]
```
