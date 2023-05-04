import Login from './src/pages/login/Login';
import Dashboard from './src/pages/dashboard/Dashboard';
import Components from './src/pages/components/Components';
import Inbox from './src/pages/inbox/Inbox';
import AuthComp from './src/components/AuthComp/AuthComp';
import VerifyCade from './src/pages/components/VerifyCade';
import CreateAccount from './src/pages/components/CreateAccount';
import Videos from './src/pages/VideosPage/Videos';
export const PublicRoutes = [
    {
        path: '/login',
        name: 'Login',
        element: <Login />,
    },
    {
        path: '/auth',
        name: 'auth',
        element: <AuthComp/>,
    },
];

export const PrivateRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        element: <Dashboard />,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        element: <Dashboard />,
    },
    {
        path: '/inbox',
        name: 'Inbox',
        element: <Inbox />,
    },
    {
        path: '/components',
        name: 'Components',
        element: <Components />,
    },
    {
        path: '/verifycade',
        name: 'Verify Cade',
        element: <VerifyCade />,
    },
    {
        path: '/createaccount',
        name: 'Create Account',
        element: <CreateAccount />,
    },
    {
        path: '/videos',
        name: 'videos',
        element: <Videos />,
    },
];
