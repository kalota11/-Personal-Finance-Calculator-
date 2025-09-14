// Project 1: Arithmetic Operators Project - "Personal Finance Calculator" //
  // Monthly Financial Data
let monthlySalary = 5000;
let freelanceIncome = 800;
let investmentReturns = 150;

// Fixed Expenses
let rent = 1200;
let utilities = 200;
let groceries = 400;
let transportation = 300;
let insurance = 150;

// Variable Expenses
let entertainment = 250;
let diningOut = 180;
let shopping = 220;
let miscellaneous = 100;

// Savings and Investments
let emergencyFundTarget = 15000;
let currentEmergencyFund = 8500;
let monthlyInvestment = 500;
let retirementContribution = 600;

// ---------------- CALCULATIONS ----------------

// 1. Total monthly income
let totalIncome = monthlySalary + freelanceIncome + investmentReturns;

// 2. Total fixed expenses
let totalFixedExpenses = rent + utilities + groceries + transportation + insurance;

// 3. Total variable expenses
let totalVariableExpenses = entertainment + diningOut + shopping + miscellaneous;

// 4. Monthly savings potential
let monthlySavingsPotential = totalIncome - (totalFixedExpenses + totalVariableExpenses + monthlyInvestment + retirementContribution);

// 5. Emergency fund gap
let emergencyFundGap = emergencyFundTarget - currentEmergencyFund;

// 6. Annual investment total
let annualInvestment = (monthlyInvestment + retirementContribution) * 12;

// 7. Percentage breakdown of expenses (fixed, variable, savings)
let totalExpenses = totalFixedExpenses + totalVariableExpenses;
let percentFixed = (totalFixedExpenses * 100) / totalIncome;
let percentVariable = (totalVariableExpenses * 100) / totalIncome;
let percentSavings = (monthlySavingsPotential * 100) / totalIncome;

// 8. Years to reach emergency fund target
let yearlyEmergencySavings = monthlySavingsPotential * 12;
let yearsToReachEmergencyFund = emergencyFundGap / yearlyEmergencySavings;

// 9. Daily spending allowance
let dailyAllowance = monthlySavingsPotential / 30;

// 10. Hourly wage equivalent
let hourlyWage = totalIncome / (30 * 8); // assuming 8 working hours per day

// ---------------- OUTPUT ----------------
console.log("💰 Total Monthly Income:", totalIncome);
console.log("🏠 Total Fixed Expenses:", totalFixedExpenses);
console.log("🛍️ Total Variable Expenses:", totalVariableExpenses);
console.log("📊 Monthly Savings Potential:", monthlySavingsPotential);
console.log("🚨 Emergency Fund Gap:", emergencyFundGap);
console.log("📈 Annual Investment Total:", annualInvestment);
console.log("📌 Expense Breakdown: Fixed =", percentFixed.toFixed(2) + "%, Variable =", percentVariable.toFixed(2) + "%, Savings =", percentSavings.toFixed(2) + "%");
console.log("⏳ Years to Reach Emergency Fund Target:", yearsToReachEmergencyFund.toFixed(1));
console.log("🗓️ Daily Spending Allowance:", dailyAllowance.toFixed(2));
console.log("⏱️ Hourly Wage Equivalent:", hourlyWage.toFixed(2));