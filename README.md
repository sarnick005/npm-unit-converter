# npm-unit-converter

## Quickstart
### 1. Installation
To use unit converter...

```bash
  $ npm install sc-unit-converter
```
### 2. Getting started
```bash
  const converter = require('sc-unit-converter'); // require the module
  //An example how to use the converter
  try {
    console.log(converter.calculateLength(1500, "M", "KM"));
    console.log(converter.calculateTime(1500, "s", "h"));
    console.log(converter.calculateWeight(566, "kg", "t"));
} catch(err) {
    console.log(err);
}
```

## License

Apache-2.0

