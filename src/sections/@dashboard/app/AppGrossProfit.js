// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { formatIncomeStatementData } from '../../../utils/formatNumber';
// component
import Iconify from '../../../components/Iconify';
import useIncomeStatement from '../../../hooks/useIncomeStatement';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function AppGrossProfit() {
  const incomeStatement = useIncomeStatement();

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="akar-icons:thumbs-up" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">
        {formatIncomeStatementData(incomeStatement.profit.gross)}
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Gross Profit
      </Typography>
    </RootStyle>
  );
}
