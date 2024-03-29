// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'transactions',
    path: '/dashboard/transactions',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'More Helpful Resources',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill')
  }
];

export default sidebarConfig;
