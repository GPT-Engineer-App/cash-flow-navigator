# cash-flow-navigator

Create Indirect Cash Flow Statement Calculation app
Objective: Create a cash flow statement using the indirect method for a company between two reporting periods (Year 1 & Year 2).

Data Inputs:

Net Income (Year 1 & Year 2)
Changes in Balance Sheet Accounts (Year 1 to Year 2):
Accounts Receivable
Inventory
Accounts Payable
Depreciation Expense
Other non-cash expenses (if applicable)
Sale of Property, Plant, and Equipment (PPE) (Year 1 & Year 2) (if applicable)
Purchase of Property, Plant, and Equipment (PPE) (Year 1 & Year 2) (if applicable)
Issuance of Common Stock (Year 1 & Year 2) (if applicable)
Dividend Payments (Year 1 & Year 2) (if applicable)
Repayment of Long-Term Debt (Year 1 & Year 2) (if applicable)
Calculations:

Cash Flow from Operating Activities:
Start with Net Income (Year 2).
Add Depreciation Expense (Year 2).
Adjust for changes in current assets and liabilities:
Add Decrease in Accounts Receivable (Year 1 to Year 2).
Add Increase in Inventory (Year 1 to Year 2). (Note: Decrease is a cash inflow)
Add Increase in Accounts Payable (Year 1 to Year 2). (Note: Increase is a cash inflow)
Subtract any other non-cash expenses added back to Net Income.
Cash Flow from Investing Activities:
Calculate the difference between Sale of PPE (Year 2) and Purchase of PPE (Year 2). (Sale is a cash inflow, Purchase is a cash outflow)
Cash Flow from Financing Activities:
Add Issuance of Common Stock (Year 2).
Subtract Dividend Payments (Year 2).
Subtract Repayment of Long-Term Debt (Year 2).
Net Cash Flow:
Sum the Cash Flow from Operating Activities, Cash Flow from Investing Activities, and Cash Flow from Financing Activities.
Output:

A formatted Cash Flow Statement with sections for Operating Activities, Investing Activities, Financing Activities, and a line for Net Cash Flow.
Additional Notes:

You can include a brief explanation for each adjustment made to Net Income.
Ensure proper formatting for positive and negative cash flows.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/cash-flow-navigator.git
cd cash-flow-navigator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
