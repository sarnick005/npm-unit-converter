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
  const minutes = converter.calculateTime(2, 'h', 'min');
  console.log(minutes); // Output: 120
```
- Converting Length:
```bash
  //conversion only possible within kilometer(km), meter(m), centimeter(cm), millimeter(mm), foot(ft)
  const converter = require('sc-unit-converter');
  const feet = converter.calculateLength(5, 'm', 'ft');
  console.log(feet); // Output: 16.4042
```

- Converting Weight:
```bash
  //conversion only possible within kilogram(kg), gram(g), pounds(lb), tonne(t), quintal(q)
  const converter = require('sc-unit-converter');
  // Example: Convert 10 kilograms to pounds
  const pounds = converter.calculateWeight(10, 'kg', 'lb');
  console.log(pounds); // Output: 22.0462
```
- Converting Temperature:
```bash
  //conversion only possible within kelvin(k), celsius(c) & fahrenheit(f)
  const converter = require('sc-unit-converter');
  // Example: Convert 10 celsius to fahrenheit
  const fahrenheit = converter.calculateTemperature(10, 'c', 'f');
  console.log(fahrenheit); // Output: 50
```
- Converting Area:
```bash
  //conversion only possible within square-kilometer(sq-km), square-meter(sq-m), acre(ac), square-foot(sq-ft), square-inch(sq-in), square-centimeter(sq-cm), square-millimeter(sq-mm)
  const converter = require('sc-unit-converter');
  // Example: Convert 25 square-meter to square-foot
  const square-foot = converter.calculateArea(25, 'sq-m', 'sq-ft');
  console.log(square-foot); // Output: 269.1
```
- Converting Number System:
```bash
  //conversion only possible within binary(bin), decimal(dec), octal(oct), hexadecimal(hex)
  const converter = require('sc-unit-converter');
  // Example: Convert 25 square-meter to square-foot
  const hexadecimal = converter.calculateNumber(45, 'oct', 'hex');
  console.log(hexadecimal); // Output: 25
```
- Calculating BMI:
```bash
  //calculation only possible if weight is given in kilograms and height is given in meter
  const converter = require('sc-unit-converter');
  // Example: Height 1.70 m & weight 70 kg
  const bmi = converter.calculateBMI(70, 1.70);
  console.log(bmi); // Output: Normal: 24.2
```

## FAQ

#### Will more units be available in future?

Answer: Yes, new units will be available with updates.

#### How can I suggest new units or features for the package?

Answer: We welcome suggestions for new units or features! Please open an issue on our GitHub repository to share your ideas and discuss them with the community.



## License

Apache-2.0

