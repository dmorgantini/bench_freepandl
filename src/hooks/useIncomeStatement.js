import { useState } from 'react';
import useTransactionStore from './useTransactionStore';
import accountTypes from '../_mocks_/categories';

function useIncomeStatement(startDate, endDate) {
  const [transactions] = useTransactionStore();


  const incomestatement = createIncomeStatement(transactions, startDate, endDate);

  return incomestatement;
}



export const createIncomeStatement = (transactions, startDate, endDate) => {
  const initialValue = 0;
  /*const incomestatement = transactions.reduce((sum, p) => sum + p.revenuetotal*p.total, 0, {
    revenues: { total: 0 },
    costOfSales: { total: 0 },
    expenses: { total: 0 },
    profit: { gross: 0, net: 0 }
  });*/

  const incomeStatement = {
    revenues: { total: 0 },
    costOfSales: { total: 0 },
    expenses: { total: 0 },
    profit: { gross: 0, net: 0 }
  };

  const filteredTxns = transactions.filter(txn => txn.date < startDate && txn.date > endDate);

  //Put in filteredTxns arr
  const calcIncomeStatement = arr => {
    arr.forEach(
      function(item) {
        let category = item.category;
        let type = accountTypes[category].type;
        let amount = item.total;
        incomeStatement[type][category] ? 
          incomeStatement[type][category] += amount : 
          incomeStatement[type][category] = amount;
        incomeStatement[type].total += amount;
      }
    )
    let grossProfit = incomeStatement.revenues.total - incomeStatement.costOfSales.total;
    let netProfit = grossProfit - incomeStatement.expenses.total;

    incomeStatement.profit.gross = grossProfit;
    incomeStatement.profit.net = netProfit;
  }
  calcIncomeStatement(transactions);

  return incomeStatement;
};

export default useIncomeStatement;
