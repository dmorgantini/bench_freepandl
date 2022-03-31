import { useState } from 'react';
import * as _ from 'lodash';

const key = 'transactions';

const useTransactionStore = () => {
  const initialValue = {};
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
      return item
        ? _.mapValues(JSON.parse(item), (t) => ({ ...t, date: new Date(t.date) }))
        : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  const saveToLocalStorage = (transactions) => {
    try {
      // Save state
      setTransactions(transactions);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(transactions));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  const deleteTransaction = (id) => {
    delete transactions[id];
    saveToLocalStorage(transactions);
  };

  const saveTransaction = (transaction) => {
    transactions[transaction.id] = transaction;
    saveToLocalStorage(transactions);
  };

  return [transactions, saveTransaction, deleteTransaction];
};

export default useTransactionStore;
