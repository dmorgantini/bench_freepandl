import { useState } from 'react';
import useTransactionStore from './useTransactionStore';
import accountTypes from '../_mocks_/categories';

function useIncomeStatement(startDate, endDate) {
  const [transactions] = useTransactionStore();


  const incomestatement = createIncomeStatement(transactions, startDate, endDate);

  return incomestatement;
}



export const createIncomeStatement = (transactions, startDate, endDate) => {
<<<<<<< Updated upstream
  const incomestatement = transactions.reduce(
    (acc) => {
      return acc;
    },
    {
      Revenues: { total: 0 },
      'Cost of Sales': { total: 0 },
      Expenses: { total: 0 },
      Profit: { gross: 0, net: 0 }
    }
  );
=======
  const initialValue = 0;
  /*const incomestatement = transactions.reduce((sum, p) => sum + p.revenuetotal*p.total, 0, {
    revenues: { total: 0 },
    costOfSales: { total: 0 },
    expenses: { total: 0 },
    profit: { gross: 0, net: 0 }
  });*/
>>>>>>> Stashed changes

  const incomeStatement = {
    revenues: { total: 1000 },
    costOfSales: { total: 0 },
    expenses: { total: 0 },
    profit: { gross: 0, net: 0 }
  };

  const filteredTxns = transactions.filter(txn => txn.date < startDate && txn.date > endDate);

  //Put in filteredTxns arr
  const setServiceRevenue = arr => {
    let serviceRevenueSum = 0;
    arr.forEach(
      function(item) {
        if (item.category === 'Service Revenue') {
          serviceRevenueSum += item.total;
        }
      }
    )
    incomeStatement.revenues.serviceRevenue = serviceRevenueSum;
  }

  setServiceRevenue(transactions);

  return incomeStatement;
};

export default useIncomeStatement;
