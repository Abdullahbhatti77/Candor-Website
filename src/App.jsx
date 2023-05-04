import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes } from '../routes';
import { getToken } from './utils/constants';
import { Layout, theme } from 'antd';
import React from 'react';
import './App.css';
import AppSidebar from './components/appSidebar/AppSidebar';
import AppHeader from './components/appHeader/AppHeader';

const DefaultLayout = ({ children }) => {
    const { Content } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Layout>
                <AppSidebar />
                <Layout
                    className="site-layout"
                    style={{
                        marginLeft: 80,
                    }}
                >
                    <AppHeader />
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 1200,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

const PrivateLayout = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!getToken()) {
            navigate('/login');
        }
    }, []);

    return (
        <>
            <DefaultLayout>{children}</DefaultLayout>
        </>
    );
};

const PublicLayout = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (getToken()) {
            navigate(`/dashboard`);
        }
    }, []);
    return <>{props.children}</>;
};

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {PublicRoutes.map((el, index) => {
                        return (
                            <Route
                                key={index + 1}
                                path={el.path}
                                name={el.name}
                                element={
                                    <PublicLayout>{el.element}</PublicLayout>
                                }
                            ></Route>
                        );
                    })}
                    {PrivateRoutes.map((el, index) => {
                        return (
                            <Route
                                key={index + 1}
                                path={el.path}
                                name={el.name}
                                element={
                                    <PrivateLayout>{el.element}</PrivateLayout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
