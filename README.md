# Crypto Tax Calculator for Australia

This is a single page web application developed using React.js and Vite. It calculates the tax on crypto investments in Australia based on the user's inputs.

## Tech Stack

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Features

- **Free Crypto Tax Calculation**: The application allows users to calculate their crypto tax for free.
- **Financial Year and Country Dropdowns**: The dropdowns are pre-filled with the values shown in the Figma design.
- **Gains, Tax Rate, and Taxes Calculation**: The application calculates the gains, tax rate, and taxes based on the user's inputs and the logic provided.
- **Responsive Design**: The application is designed to be responsive, with the rows changing into a single column on smaller screens.

## How to Use

1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## Example Calculation

For the inputs:
- Purchase Price = 50
- Sale Price = 100
- Expenses = 20
- Investment Type = Long Term
- Annual Income = ($45001 - $120000)

The application would calculate:
- Tax Rate = “$5092 + 32.5% of excess over $45000”
- Capital Gains Amount = 30
- Long Term Capital Gains Discount = 15
- Net Capital Gains Amount = 15
- Tax you need to pay = 4.875 (which is 32.5% of 15)

## 📸 Screenshots

### Landing Page
![Landing Page](/Screenshot/landing.jpeg)

### Example
![Example](/Screenshot/example.jpeg)


## Deployment

The application is deployed using Vercel. You can access it [here](https://react-pm-tax-calculator.vercel.app/).


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.