import React from "react";
import { Menu, Col } from "antd";
import { getItem } from "../utils";
import { SettingOutlined, HomeOutlined, BarChartOutlined, CompassOutlined, ShoppingOutlined, MessageOutlined, QuestionCircleOutlined, FolderOutlined } from '@ant-design/icons';
import logo from "../images/logo.png";

const Sidebar = () => {
    const items = [
        getItem('Home', '1', <HomeOutlined />),
        getItem('Analytic', '2', <BarChartOutlined />),
        getItem('Explore', '3', <CompassOutlined />),
        getItem('Shop', '4', <ShoppingOutlined />),
        getItem('Inbox', '5', <MessageOutlined />),
        getItem('Tools', 'tools', null, [getItem('Setting', '6', <SettingOutlined />), getItem('Help', '7', <QuestionCircleOutlined />)], 'group'),
        getItem('Projects', 'projects', null, [getItem('Amazon', '8', <FolderOutlined />), getItem('Invinity HQ', '9', <FolderOutlined />)], 'group'),
    ];
    return (
        <Col span={4}>
            <div className="h-screen border-r border-inherit">
                <div className="flex flex-row ml-2.5">
                    <img src={logo} alt="Logo" className="w-6 h-6 mt-2 m-1" />
                    <h2 className="font-bold m-2">Omoi</h2>
                </div>
                <Menu
                    onClick={() => { "clicked" }}
                    style={{ width: 'auto' }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </div>
        </Col>
    )
}

export default Sidebar;