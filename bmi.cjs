function calculateBMI(weight, height) {
    let bmi = weight / (height * height);

    let category;
    if (bmi < 16.0) {
        category = `Severely Underweight: ${bmi}`;
    } else if (bmi >= 16.0 && bmi < 18.5) {
        category = `Underweight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 25.0) {
        category = `Normal: ${bmi}`;
    } else if (bmi >= 25.0 && bmi < 30.0) {
        category = `Overweight: ${bmi}`;
    } else if (bmi >= 30.0 && bmi < 35.0) {
        category = `Obese (Class 1 - Moderately Obese): ${bmi}`;
    } else if (bmi >= 35.0 && bmi < 40.0) {
        category = `Obese (Class 2 - Severely Obese): ${bmi}`;
    } else {
        category = `Obese (Class 3 - Morbidly Obese): ${bmi}`;
    }
    return category;
}

module.exports = calculateBMI;
