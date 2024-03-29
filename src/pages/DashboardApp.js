// material
import { Box, Grid, Container, Typography, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppIncomeStatement,
  AppGrossProfit,
  AppOrderTimeline,
  AppRevenueByCategory,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  AppExpensesByType,
  AppHeader
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Bench P&L">
      <Container maxWidth="xl">
        <AppHeader />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppGrossProfit />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppIncomeStatement />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={2}>
              <AppRevenueByCategory />
              <AppExpensesByType />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
