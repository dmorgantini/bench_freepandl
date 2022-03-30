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
                  {incomeStatement.revenues['Sales Revenue'] || '-'}
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
                  {incomeStatement.revenues['Service Revenue'] || '-'}
                </Typography>
              </TableCell>
            </TableRow>{' '}
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Returns & Chargebacks</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">(35.00)</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Interest Income</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">-</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ maxWidth: 100 }} />
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">Other Income</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">3.15</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" colSpan={3}>
                <Typography variant="subtitle1">Total Revenue</Typography>
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Typography variant="body2">968.15</Typography>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
