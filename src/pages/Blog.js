import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
//
import POSTS from '../_mocks_/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="Resources | Bench P&L">
      <Container>
        <Stack alignItems="left" mb={5}>
          <Typography display="block" variant="h4" gutterBottom>
            Done inputting the data yourself?
          </Typography>
          <Typography display="block" variant="h5" gutterBottom>
            Step into a world of better, less frustrating bookkeeping...
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Card sx={{ maxWidth: 345, ml: 2, mb: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image="../static/mock-images/covers/cover_1.jpg"
              alt="A busy market street"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                A Founder's Guide to Startup Accounting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Accounting may be a hassle, but it can also be your startup's secret weapon. Learn
                how!
              </Typography>
              <Button
                sx={{ mt: 0.5, ml: -1 }}
                size="large"
                href="https://bench.co/blog/accounting/startup-accounting/?utm_source=content&utm_medium=resource&utm_campaign=income-statement-template"
                target="_blank"
              >
                Read Article
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, ml: 2, mb: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image="../static/mock-images/covers/cover_2.jpg"
              alt="A picture of boats floating"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Understanding an Income Statement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A clear explanation and an easy to follow video explaining the purpose of the income
                statement.
              </Typography>
              <Button
                sx={{ mt: 0.5, ml: -1 }}
                size="large"
                href="https://bench.co/blog/accounting/income-statement/?utm_source=content&utm_medium=resource&utm_campaign=income-statement-template"
                target="_blank"
              >
                Read Article
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, ml: 2, mb: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image="../static/mock-images/covers/cover_3.jpg"
              alt="A picture of a market stand"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Financial Statements 101
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn how to read financial statements. They can (and should) influence every major
                decision you make in your small business.
              </Typography>
              <Button
                sx={{ mt: 0.5, ml: -1 }}
                size="large"
                href="https://bench.co/blog/accounting/financial-statements/?utm_source=content&utm_medium=resource&utm_campaign=income-statement-template"
                target="_blank"
              >
                Read Article
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, ml: 2, mb: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image="../static/mock-images/covers/cover_4.jpg"
              alt="A picture of a busy street"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                How to complete an income statement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For a more detailed breakdown of how to use this template (and how to use Excel for
                basic small business accounting) read our helpful article on the Bench blog:
              </Typography>
              <Button
                sx={{ mt: 0.5, ml: -1 }}
                size="large"
                href="https://bench.co/blog/bookkeeping/excel-bookkeeping/?utm_source=content&utm_medium=resource&utm_campaign=income-statement-template"
                target="_blank"
              >
                Read Article
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
