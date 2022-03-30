import { useState } from 'react';
import moment from 'moment';

const key = 'transactions';

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
    total: 35.0
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

const useTransactionStore = () => {
  const initialValue = DEFAULT_TRANSACTIONS;
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [transactions, setTransactions] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  return [transactions];
};

export default useTransactionStore;
