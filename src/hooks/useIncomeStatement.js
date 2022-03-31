import moment from 'moment';
import * as _ from 'lodash';
import { useBetween } from 'use-between';

import useTransactionStore from './useTransactionStore';
import accountTypes from '../_mocks_/categories';
import useDateRange from './useDateRange';

function useIncomeStatement() {
  const [transactions] = useTransactionStore();
  const [dateRange] = useBetween(useDateRange);

  return createIncomeStatement(transactions, dateRange[0], dateRange[1]);
}

export const createIncomeStatement = (transactions, startDate, endDate) => {
  const incomeStatement = {
    revenues: { total: 0 },
    costOfSales: { total: 0 },
    expenses: { total: 0 },
    profit: { gross: 0, net: 0 }
  };
  const filteredTxns = _.values(transactions).filter((txn) =>
    moment(txn.date).isBetween(startDate.startOf('day'), endDate.endOf('day'))
  );

  // Put in filteredTxns arr
  const calcIncomeStatement = (arr) => {
    arr.forEach((item) => {
      const { category } = item;
      const { type } = accountTypes[category];
      const amount = item.total;

      // eslint-disable-next-line no-unused-expressions
      incomeStatement[type][category]
        ? (incomeStatement[type][category] += amount)
        : (incomeStatement[type][category] = amount);
      incomeStatement[type].total += amount;
    });
    const grossProfit = incomeStatement.revenues.total - incomeStatement.costOfSales.total;
    const netProfit = grossProfit - incomeStatement.expenses.total;

    incomeStatement.profit.gross = grossProfit;
    incomeStatement.profit.net = netProfit;
  };
  calcIncomeStatement(filteredTxns);

  return incomeStatement;
};

export default useIncomeStatement;
