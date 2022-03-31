import { Box, Typography, Grid, TextField } from '@mui/material';
import { DateRangePicker, LocalizationProvider } from '@mui/lab';
import DateFnsAdapter from '@mui/lab/AdapterMoment';
import * as React from 'react';
import { useBetween } from 'use-between';

import account from '../../../_mocks_/account';
import useDateRange from '../../../hooks/useDateRange';

export default function AppHeader() {
  const [dateRange, setDateRange] = useBetween(useDateRange);

  return (
    <Box sx={{ pb: 5 }}>
      <Grid container spacing={2}>
        <Grid item sm={6} md={8}>
          <Typography variant="h4">Hi, {account.displayName}</Typography>
          <Typography variant="subtitle1">Here are your finances at a glance!</Typography>
        </Grid>

        <Grid item sm={6} md={4}>
          <LocalizationProvider dateAdapter={DateFnsAdapter}>
            <DateRangePicker
              startText="Beginning Date"
              endText="Ending Date"
              value={dateRange}
              onChange={(newValue) => {
                setDateRange(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </>
              )}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  );
}
