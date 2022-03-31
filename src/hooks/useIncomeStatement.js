import moment from 'moment';
import * as _ from 'lodash';
import useTransactionStore from './useTransactionStore';
import accountTypes from '../_mocks_/categories';

function useIncomeStatement(
  startDate = moment().startOf('month'),
  endDate = moment().endOf('month')
) {
  const [transactions] = useTransactionStore();

  return createIncomeStatement(transactions, startDate, endDate);
}

export const createIncomeStatement = (transactions, startDate, endDate) => {
  const incomeStatement = {
    revenues: { total: 0 },
    costOfSales: { total: 0 },
    expenses: { total: 0 },
    profit: { gross: 0, net: 0 }
  };

  // const filteredTxns = transactions.filter((txn) => txn.date < startDate && txn.date > endDate);

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
  calcIncomeStatement(_.values(transactions));

  return incomeStatement;
};

export default useIncomeStatement;
