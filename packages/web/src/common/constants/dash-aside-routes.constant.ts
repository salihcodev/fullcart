import { BsViewList, BsGrid } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { GoPackage } from 'react-icons/go';

const dashAsideRoutes = [
  { icon: BsGrid, value: `Dashboard`, path: `/dashboard` },
  { icon: BsViewList, value: `Products`, path: `/dashboard/products` },
  { icon: FiUsers, value: `Users`, path: `/dashboard/users` },
  {
    icon: BiMessageSquareAdd,
    value: `Add Product`,
    path: `/dashboard/manage-products/new`,
  },
  { icon: GoPackage, value: `Orders`, path: `/dashboard/orders` },
];

export default dashAsideRoutes;
