const accountTypes = {
  'Sales Revenue': {
    category: 'Sales Revenue',
    type: 'Income',
    description: 'Revenue transactions sourced from selling products'
  },
  'Service Revenue': {
    category: 'Service Revenue',
    type: 'Income',
    description: 'Revenue transactions sourced from selling services'
  },
  'Returns & Chargebacks': {
    category: 'Returns & Chargebacks',
    type: 'Income',
    description: 'Sales or Service refunds, returns, and chargebacks'
  },
  'Interest Income': {
    category: 'Interest Income',
    type: 'Income',
    description: 'Income earned from interest'
  },
  'Other Income': {
    category: 'Other Income',
    type: 'Income',
    description: 'Other sources of income'
  },
  'Cost of Goods Sold': {
    category: 'Cost of Goods Sold',
    type: 'Cost of Sales',
    description: 'Product purchases for the purpose of resale'
  },
  'Cost of Service': {
    category: 'Cost of Service',
    type: 'Cost of Sales',
    description: 'Transactions that are directly related to the generation of Service Revenue'
  },
  'Bank & Merchant Fees': {
    category: 'Bank & Merchant Fees',
    type: 'Expense',
    description: 'Fees from Banks or Merchant Processors'
  },
  'Business Meals': {
    category: 'Business Meals',
    type: 'Expense',
    description: 'Meals with clients'
  },
  'Client Entertainment': {
    category: 'Client Entertainment',
    type: 'Expense',
    description: 'Entertainment with clients'
  },
  'Computers or Equipment': {
    category: 'Computers or Equipment',
    type: 'Expense',
    description: 'Computer or other equipment purchases'
  },
  'Gas & Auto': {
    category: 'Gas & Auto',
    type: 'Expense',
    description: 'Gas and vehicle maintenance expenses'
  },
  'Independent Contractor': {
    category: 'Independent Contractor',
    type: 'Expense',
    description: 'Payments to people for services'
  },
  'Insurance Payments': {
    category: 'Insurance Payments',
    type: 'Expense',
    description: 'For all business insurance payments'
  },
  'Interest Paid': {
    category: 'Interest Paid',
    type: 'Expense',
    description: 'Interest paid on credit cards or loans'
  },
  'Lawyers & Accountants': {
    category: 'Lawyers & Accountants',
    type: 'Expense',
    description: 'Payments for professional services'
  },
  'Licenses or Fees': {
    category: 'Licenses or Fees',
    type: 'Expense',
    description: 'Local, State, or Federal business licenses or fees'
  },
  'Marketing or Advertising': {
    category: 'Marketing or Advertising',
    type: 'Expense',
    description: 'Marketing and advertising costs'
  },
  'Miscellaneous Expenses': {
    category: 'Miscellaneous Expenses',
    type: 'Expense',
    description: 'Other business expenses'
  },
  'Phone, Internet & Utilities': {
    category: 'Phone, Internet & Utilities',
    type: 'Expense',
    description: 'A place for common business utility expenses'
  },
  'Postage & Shipping': {
    category: 'Postage & Shipping',
    type: 'Expense',
    description: 'Postage and shipping costs to customers'
  },
  'Rent or Lease': {
    category: 'Rent or Lease',
    type: 'Expense',
    description: 'Rent or lease payments'
  },
  'Software & Hosting': {
    category: 'Software & Hosting',
    type: 'Expense',
    description: 'Software and web hosting payments'
  },
  Supplies: {
    category: 'Supplies',
    type: 'Expense',
    description: 'Other business supplies'
  },
  'Taxes Paid': {
    category: 'Taxes Paid',
    type: 'Expense',
    description: 'Taxes paid by the business'
  },
  'Travel & Transportation': {
    category: 'Travel & Transportation',
    type: 'Expense',
    description: 'Travelling and transportation costs'
  }
};

export default accountTypes;
