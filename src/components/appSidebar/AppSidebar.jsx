import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import { _nav } from '../../../_nav';
import { PrivateRoutes } from '../../../routes';
import logo from '../../assets/Images/Logo.png';

const AppSidebar = () => {
    const navigate = useNavigate();
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navClickHandler = (e) => {
        const event = e.domEvent.target.textContent;
        PrivateRoutes.forEach((route) => {
            if (route.name == event) {
                navigate(`${route.path}`);
            }
        });
    };

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                width: '50px',
                left: 0,
                top: 0,
                bottom: 0,
            }}
            theme="light"
        >
            <img src={logo} alt="" className="mx-4 py-2" />
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={_nav}
                onClick={navClickHandler}
            />
        </Sider>
    );
};

export default AppSidebar;
