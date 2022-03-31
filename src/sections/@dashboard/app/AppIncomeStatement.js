import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
  IconButton,
  CardContent,
  TableContainer,
  Table,
  TableRow,
  TableCell
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useIncomeStatement from '../../../hooks/useIncomeStatement';

export default function AppIncomeStatement() {
  const incomeStatement = useIncomeStatement();
  const formatIncomeStatementData = (data) => {
    if (data) {
      if (data < 0) {
        return `(${Math.abs(data).toFixed(2)})`;
      }
      return data.toFixed(2);
    }
    return '-';
  };

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Income Statement"
        subheader="March, 2021"
      />
      <CardContent>
        <TableContainer>
          <Table>
            <TableRow>
              <TableCell align="left" colSpan={4}>
                <Typography variant="subtitle1">Revenues</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Sales Revenue</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.revenues['Sales Revenue'])}
                </Typography>
              </TableCell>
            </TableRow>{' '}
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Service Revenue</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.revenues['Service Revenue'])}
                </Typography>
              </TableCell>
            </TableRow>{' '}
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Returns & Chargebacks</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.revenues['Returns & Chargebacks'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Interest Income</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.revenues['Interest Income'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Other Income</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.revenues['Other Income'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" colSpan={3}>
                <Typography variant="subtitle1">Total Revenue</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.revenues.total)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" colSpan={4}>
                <Typography variant="subtitle1">Cost of Sales</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Cost of Goods Sold</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.costOfSales['Cost of Goods Sold'])}
                </Typography>
              </TableCell>
            </TableRow>{' '}
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Cost of Service</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.costOfSales['Cost of Service'])}
                </Typography>
              </TableCell>
            </TableRow>{' '}
            <TableRow>
              <TableCell align="left" colSpan={3}>
                <Typography variant="subtitle1">Total Cost of Sales</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.costOfSales.total)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" colSpan={4}>
                <Typography variant="subtitle1">Expenses</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Bank & Merchant Fees</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Bank & Merchant Fees'])}
                </Typography>
              </TableCell>
            </TableRow>{' '}
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Business Meals</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Business Meals'])}
                </Typography>
              </TableCell>
            </TableRow>{' '}
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Client Entertainment</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Client Entertainment'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Computers or Equipment</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Computers or Equipment'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Gas & Auto</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Gas & Auto'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Independent Contractor</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Independent Contractor'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Insurance Payments</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Insurance Payments'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Interest Paid</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Interest Paid'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Lawyers & Accountants</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Lawyers & Accountants'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Licenses or Fees</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Licenses or Fees'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Marketing or Advertising</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Marketing or Advertising'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Miscellaneous Expenses</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Miscellaneous Expenses'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Phone, Internet & Utilities</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(
                    incomeStatement.expenses['Phone, Internet & Utilities']
                  )}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Postage & Shipping</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Postage & Shipping'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Rent or Lease</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Rent or Lease'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Software & Hosting</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Software & Hosting'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Supplies</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses.Supplies)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Taxes Paid</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Taxes Paid'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Travel & Transportation</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses['Travel & Transportation'])}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" colSpan={3}>
                <Typography variant="subtitle1">Total Expenses</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">
                  {formatIncomeStatementData(incomeStatement.expenses.total)}
                </Typography>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
