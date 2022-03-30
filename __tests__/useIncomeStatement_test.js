import moment from 'moment';

import { createIncomeStatement } from '../src/hooks/useIncomeStatement';
import { DEFAULT_TRANSACTIONS } from '../src/hooks/useTransactionStore';

describe('createIncomeStatement', () => {
  it('should add sales revenue', () => {
    const incomeStatement = createIncomeStatement(
      DEFAULT_TRANSACTIONS,
      moment('3/1/21'),
      moment('3/31/21')
    );
    expect(incomeStatement.Revenues['Service Revenue']).toBe(1000);
  });
});
