import { useState } from 'react';
import useTransactionStore from './useTransactionStore';
import categories from '../_mocks_/categories';

function useIncomeStatement(startDate, endDate) {
  const [transactions] = useTransactionStore();

  const incomestatement = transactions.reduce(() => {}, {
    revenues: { total: 0 },
    costOfSales: { total: 0 },
    expenses: { total: 0 },
    profit: { gross: 0, net: 0 }
  });

  return incomestatement;
}

export default useIncomeStatement;
