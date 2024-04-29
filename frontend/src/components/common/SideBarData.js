import Dashboard from '@mui/icons-material/Dashboard';
import GradingIcon from '@mui/icons-material/Grading';
import PersonIcon from '@mui/icons-material/Person'
import GroupIcon from '@mui/icons-material/Group'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

export const SideBarData = [
    {
        title: 'Dashboard',
        icon: <Dashboard />,
        subTitle: [
            {
                title: 'View',
                link: '/dashboard/view'
            }
        ]
    },
    
    {
        title: 'Approval',
        icon: < GradingIcon />,
        subTitle: [
            {
                title: 'Order ',
                link:  '/approve/order', 
            }, 
            {
                title: 'Purchase',
                link:  '/approve/order',
            }
        ]
    },

    {
        title: 'User',
        icon: <PersonIcon />,
        subTitle: [
            {
                title: 'Create User',
                link:  '/user/create', 
            }, 
            {
                title: 'Display User',
                link:  '/user/display',
            }
        ]
    },

    {
        title: 'Customer',
        icon: <GroupIcon />,
        subTitle: [
            {
                title: 'Create',
                link:  '/customer/create', 
            }, 
            {
                title: 'Display',
                link:  '/customer/display',
            }
        ]
    },

    {
        title: 'Supplier',
        icon: <ShoppingCartIcon />,
        subTitle: [
            {
                title: 'Create',
                link:  '/supplier/create', 
            }, 
            {
                title: 'Display',
                link:  '/supplier/display',
            }
        ]
    },
    {
        title: 'Sales',
        link:  '/sales',
        icon: <PointOfSaleIcon />,
        subTitle: [
            {
                title: 'Create Sales',
                link:  '/sales/create', 
            }, 
            {
                title: 'Display Sales',
                link:  '/sales/display',
            }
        ]
    },
    {
        title: 'Purchase',
        icon: <AddShoppingCartIcon />,
        subTitle: [
            {
                title: 'Create',
                link:  '/purchase/create', 
            }, 
            {
                title: 'Display',
                link:  '/purchase/display',
            }
        ]
    },

]