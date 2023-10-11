import React from "react";
import { Menu, Col } from "antd";
import { getItem } from "../utils";
import { SettingOutlined, HomeOutlined, BarChartOutlined, CompassOutlined, ShoppingOutlined, MessageOutlined, QuestionCircleOutlined, FolderOutlined } from '@ant-design/icons';
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const items = [
        getItem('Home', '/new-raft-labs/', <HomeOutlined />),
        getItem('Analytic', '/new-raft-labs/analytic', <BarChartOutlined />),
        getItem('Explore', '/new-raft-labs/explore', <CompassOutlined />),
        getItem('Shop', '/new-raft-labs/shop', <ShoppingOutlined />),
        getItem('Inbox', '/new-raft-labs/inbox', <MessageOutlined />),
        getItem('Tools', 'tools', null, [getItem('Setting', '/new-raft-labs/setting', <SettingOutlined />), getItem('Help', '/new-raft-labs/help', <QuestionCircleOutlined />)], 'group'),
        getItem('Projects', 'projects', null, [getItem('Amazon', '/new-raft-labs/amazon', <FolderOutlined />), getItem('Invinity HQ', '/new-raft-labs/invinity', <FolderOutlined />)], 'group'),
    ];
    return (
        <Col span={4}>
            <div className="h-screen border-r border-inherit">
                <div className="flex flex-row ml-2.5">
                    <img src={logo} alt="Logo" className="w-6 h-6 mt-2 m-1" />
                    <h2 className="font-bold m-2">Omoi</h2>
                </div>
                <Menu
                    onClick={({ key }) => { navigate(key) }}
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