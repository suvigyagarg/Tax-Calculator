# Tax Calculator

This is a tax calculator web app built using HTML, JavaScript, jQuery, and Bootstrap. It helps users calculate their tax based on their income, deductions, and age. This was provided to me as a challenge Assignment by Fyle.

## Hosted Links

-You can find the hosted links for this project at [suvigyagarg.github.io/Tax-Calculator](https://suvigyagarg.github.io/Tax-Calculator/).

-Hosted on Netlify as well link for this project  [tax-calculator-suvigya.netlify.app](https://tax-calculator-suvigya.netlify.app/).

## How to Run

To run this web app, follow any of these steps:

1. Open the `index.html` file in a browser or an IDE.
2. Run it on a live server to ensure all features work correctly.

## Features

- Mobile responsive design for easy use on any device.
- Calculates tax based on the following formula:

    - If the overall income (after deductions) is under 8 Lakhs, no tax is applied.
    - If the overall income is over 8 Lakhs, the amount over 8 Lakhs is taxed based on the following rates:
        - 30% for people under 40 years old.
        - 40% for people between 40 and 60 years old.
        - 10% for people over 60 years old.

- Example:
    - Age: 34
    - Income: 40 Lakhs
    - Deductions: None
    - Tax: 0.3 * (40 - 8) = 9.6 Lakhs

## How to Use

To use the app, the user needs to enter the following information as whole numbers:

- Gross annual income
- Extra income
- Deductions

The app will then calculate the tax to be paid and the overall income.

**Note**: The app assumes that the user will enter 0 values in the input fields instead of leaving them blank. and User would enter the value without the use of any commas.

## Challenges

One of the challenges I faced while building this app was using jQuery for input validation. Instead of using the `required` attribute for checking whether a field is empty and I had to validate whether the input is a number or not.




