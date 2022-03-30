import { useState } from 'react';
import useTransactionStore from './useTransactionStore';
import categories from '../_mocks_/categories';

function useIncomeStatement(startDate, endDate) {
  const [transactions] = useTransactionStore();

  const incomestatement = createIncomeStatement(transactions, startDate, endDate);

  return incomestatement;
}

export const createIncomeStatement = (transactions, startDate, endDate) => {
  const incomestatement = transactions.reduce((acc) => { return acc;}, {
    revenues: { total: 0 },
    costOfSales: { total: 0 },
    expenses: { total: 0 },
    profit: { gross: 0, net: 0 }
  });

  return incomestatement;
};

export default useIncomeStatement;
