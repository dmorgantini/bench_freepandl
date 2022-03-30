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
    expect(incomeStatement).toMatchInlineSnapshot(`
      Object {
        "costOfSales": Object {
          "Cost of Service": 170,
          "total": 170,
        },
        "expenses": Object {
          "Bank & Merchant Fees": 25,
          "Business Meals": 87.32,
          "Computers or Equipment": 1350.53,
          "Independent Contractor": 25,
          "Insurance Payments": 120,
          "Postage & Shipping": 30,
          "Supplies": 25,
          "Travel & Transportation": 55,
          "total": 1717.85,
        },
        "profit": Object {
          "gross": 798.15,
          "net": -919.6999999999999,
        },
        "revenues": Object {
          "Other Income": 3.15,
          "Returns & Chargebacks": -35,
          "Service Revenue": 1000,
          "total": 968.15,
        },
      }
    `);
  });
});
