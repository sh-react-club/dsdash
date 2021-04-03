# `object`

- [x] deepClone

## Install

```bash
npm install --save-dev @dsdash/object
```

## Usage

### deepClone

```js
const object = require('@dsdash/array');
const { deepClone } = object;
const obj = {name:'zhangsan'}
const newobj = deepClone(obj);
newobj.name = 'lisi';
console.log(obj) // {name:'zhangsan'}
console.log(newobj) // {name:'lisi'}
```
