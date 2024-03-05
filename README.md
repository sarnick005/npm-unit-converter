# npm-unit-converter

## Quickstart
### 1. Installation
To use unit converter...

```bash
   npm install sc-unit-converter
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
### 3. Usage
- Converting Time:
```bash
  //conversion only possible within hour(h), minute(min), second(s)
  const converter = require('sc-unit-converter');
  // Example: Convert 2 hours to minutes
  const minutes = convertTime(2, 'h', 'min');
  console.log(minutes); // Output: 120
```
- Converting Length:
```bash
  //conversion only possible within kilometer(km), meter(m), centimeter(cm), milimeter(mm), foot(ft)
  const converter = require('sc-unit-converter');
  const feet = convertLength(5, 'm', 'ft');
  console.log(feet); // Output: 16.4042
```

- Converting Weight:
```bash
  //conversion only possible within kilogram(kg), gram(g), pounds(lb), tonne(t), quintal(q)
  const converter = require('sc-unit-converter');
  // Example: Convert 10 kilograms to pounds
  const pounds = convertWeight(10, 'kg', 'lb');
  console.log(pounds); // Output: 22.0462
```


## FAQ

#### Will more units be available in future?

Answer: Yes, new units will be available with updates.

#### How can I suggest new units or features for the package?

Answer: We welcome suggestions for new units or features! Please open an issue on our GitHub repository to share your ideas and discuss them with the community.



## License

Apache-2.0

