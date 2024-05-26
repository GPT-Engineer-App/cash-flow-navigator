import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, Text, HStack, Box } from "@chakra-ui/react";

const Index = () => {
  const [inputs, setInputs] = useState({
    netIncome: "",
    depreciation: "",
    accountsReceivable: "",
    inventory: "",
    accountsPayable: "",
    otherNonCash: "",
    salePPE: "",
    purchasePPE: "",
    issuanceStock: "",
    dividendPayments: "",
    repaymentDebt: "",
  });

  const [cashFlow, setCashFlow] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const calculateCashFlow = () => {
    const { netIncome, depreciation, accountsReceivable, inventory, accountsPayable, otherNonCash, salePPE, purchasePPE, issuanceStock, dividendPayments, repaymentDebt } = inputs;

    const cashFlowFromOperatingActivities = parseFloat(netIncome) + parseFloat(depreciation) + parseFloat(accountsReceivable) + parseFloat(inventory) + parseFloat(accountsPayable) - parseFloat(otherNonCash);

    const cashFlowFromInvestingActivities = parseFloat(salePPE) - parseFloat(purchasePPE);

    const cashFlowFromFinancingActivities = parseFloat(issuanceStock) - parseFloat(dividendPayments) - parseFloat(repaymentDebt);

    const netCashFlow = cashFlowFromOperatingActivities + cashFlowFromInvestingActivities + cashFlowFromFinancingActivities;

    setCashFlow({
      cashFlowFromOperatingActivities,
      cashFlowFromInvestingActivities,
      cashFlowFromFinancingActivities,
      netCashFlow,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Indirect Cash Flow Statement Calculator
        </Heading>
        <Input placeholder="Net Income (Year 2)" name="netIncome" value={inputs.netIncome} onChange={handleChange} />
        <Input placeholder="Depreciation Expense (Year 2)" name="depreciation" value={inputs.depreciation} onChange={handleChange} />
        <Input placeholder="Decrease in Accounts Receivable (Year 1 to Year 2)" name="accountsReceivable" value={inputs.accountsReceivable} onChange={handleChange} />
        <Input placeholder="Increase in Inventory (Year 1 to Year 2)" name="inventory" value={inputs.inventory} onChange={handleChange} />
        <Input placeholder="Increase in Accounts Payable (Year 1 to Year 2)" name="accountsPayable" value={inputs.accountsPayable} onChange={handleChange} />
        <Input placeholder="Other Non-Cash Expenses" name="otherNonCash" value={inputs.otherNonCash} onChange={handleChange} />
        <Input placeholder="Sale of PPE (Year 2)" name="salePPE" value={inputs.salePPE} onChange={handleChange} />
        <Input placeholder="Purchase of PPE (Year 2)" name="purchasePPE" value={inputs.purchasePPE} onChange={handleChange} />
        <Input placeholder="Issuance of Common Stock (Year 2)" name="issuanceStock" value={inputs.issuanceStock} onChange={handleChange} />
        <Input placeholder="Dividend Payments (Year 2)" name="dividendPayments" value={inputs.dividendPayments} onChange={handleChange} />
        <Input placeholder="Repayment of Long-Term Debt (Year 2)" name="repaymentDebt" value={inputs.repaymentDebt} onChange={handleChange} />
        <Button colorScheme="teal" onClick={calculateCashFlow}>
          Calculate Cash Flow
        </Button>
        {cashFlow && (
          <Box width="100%" mt={6} p={4} borderWidth={1} borderRadius="md">
            <Heading as="h2" size="md">
              Cash Flow Statement
            </Heading>
            <VStack spacing={2} align="start">
              <Text>Cash Flow from Operating Activities: ${cashFlow.cashFlowFromOperatingActivities.toFixed(2)}</Text>
              <Text>Cash Flow from Investing Activities: ${cashFlow.cashFlowFromInvestingActivities.toFixed(2)}</Text>
              <Text>Cash Flow from Financing Activities: ${cashFlow.cashFlowFromFinancingActivities.toFixed(2)}</Text>
              <Text fontWeight="bold">Net Cash Flow: ${cashFlow.netCashFlow.toFixed(2)}</Text>
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
