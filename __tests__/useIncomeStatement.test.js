import moment from 'moment';

import { createIncomeStatement } from '../src/hooks/useIncomeStatement';

export const DEFAULT_TRANSACTIONS = [
  {
    id: '1',
    name: 'Deposit',
    date: moment('3/13/21'),
    category: 'Service Revenue',
    total: 400.0
  },
  {
    id: '2',
    name: 'Fiverr',
    date: moment('3/15/21'),
    category: 'Independent Contractor',
    total: 25.0
  },
  {
    id: '3',
    name: 'State patent office',
    date: moment('3/15/21'),
    category: 'Cost of Service',
    total: 35.0
  },
  {
    id: '4',
    name: 'Apple',
    date: moment('3/16/21'),
    category: 'Computers or Equipment',
    total: 1350.53
  },
  {
    id: '5',
    name: 'Bank fee',
    date: moment('3/20/21'),
    category: 'Bank & Merchant Fees',
    total: 25
  },
  {
    id: '6',
    name: 'Dividend',
    date: moment('3/25/21'),
    category: 'Other Income',
    total: 3.15
  },
  {
    id: '7',
    name: 'Refund',
    date: moment('3/25/21'),
    category: 'Returns & Chargebacks',
    total: -35.0
  },
  {
    id: '8',
    name: 'Deposit',
    date: moment('3/25/21'),
    category: 'Service Revenue',
    total: 600.0
  },
  {
    id: '9',
    name: 'Black cab taxi',
    date: moment('3/26/21'),
    category: 'Travel & Transportation',
    total: 55.0
  },
  {
    id: '10',
    name: 'Staples',
    date: moment('3/26/21'),
    category: 'Supplies',
    total: 25.0
  },
  {
    id: '11',
    name: 'Fed Ex',
    date: moment('3/28/21'),
    category: 'Postage & Shipping',
    total: 30.0
  },
  {
    id: '12',
    name: 'State patent office',
    date: moment('3/30/21'),
    category: 'Cost of Service',
    total: 55.0
  },
  {
    id: '13',
    name: 'Meal with client',
    date: moment('3/31/21'),
    category: 'Business Meals',
    total: 87.32
  },
  {
    id: '14',
    name: 'Deposition costs',
    date: moment('3/31/21'),
    category: 'Cost of Service',
    total: 80.0
  },
  {
    id: '15',
    name: 'Liability insurance',
    date: moment('3/31/21'),
    category: 'Insurance Payments',
    total: 120.0
  }
];

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
