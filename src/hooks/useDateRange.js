import * as React from 'react';
import moment from 'moment';

const useDateRange = () => {
  const [dateRange, setDateRange] = React.useState(() => [
    moment().startOf('month'),
    moment().endOf('month')
  ]);

  return [dateRange, setDateRange];
};

export default useDateRange;
