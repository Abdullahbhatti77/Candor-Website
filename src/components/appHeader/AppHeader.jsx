import React from 'react';
import { Layout, theme } from 'antd';

const AppHeader = () => {
    const { Header } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header
            style={{
                background: colorBgContainer,
            }}
        >
            {/* {React.createElement(
        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
        },
    )} */}
        </Header>
    );
};

export default AppHeader;
