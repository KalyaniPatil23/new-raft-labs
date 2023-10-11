import React, { useEffect, useState } from "react";
import { Divider, Badge, Avatar, Card, Row, Col, Dropdown, Button, Space, Table } from "antd";
import { SearchOutlined, DownOutlined, CaretUpOutlined, CalendarOutlined, BellOutlined, VideoCameraOutlined, ClockCircleOutlined } from '@ant-design/icons';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.png";
import image3 from '../images/image3.png';
import maleProfile from "../images/male_image.jpg";
import femaleProfile from "../images/female_image.jpg";
import profile1 from "../images/profile1.jpg";
import books from "../images/books.png";
import laptop from '../images/laptop.png';
import book from '../images/book.png';
import './dashboard.css';
import CustomBar from "./common/BarChart";
import WeekCalendar from "./common/WeekCalendar";
import { Months, Status } from "../utils";

const Dashboard = () => {
    const [selectedMonth, setSelectedMonth] = useState('Month');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedStatus, setSelectedStatus] = useState('Status')
    const [scheduleOfDay, setScheduleOfDay] = useState([])
    const [selecetdMonthOfGraph, setSelectedMonthOfGraph] = useState('Month')

    useEffect(() => {
        //get scheduled of the day
        setScheduleOfDay([
            {
                subject: 'Meeting with Client',
                time: '12pm',
                image: laptop,
                location: 'Google Meet'
            },
            {
                subject: 'Weekly Report',
                time: '03pm',
                image: books,
                location: 'Google Meet'
            },
            {
                subject: 'Daily Scrum Meeting',
                time: '05pm',
                image: book,
                location: 'Google Meet'
            }
        ])
    }, [selectedDate])

    const barGraphData = {
        labels: ["1-10 Oct", "11-20 Oct", "21-30 Oct"],
        datasets: [
            {
                data: [30, 35, 25],
                backgroundColor: '#d3cffc'
            },
            {
                data: [50, 60, 40],
                backgroundColor: '#6e62e5'
            },

        ],

    };

    const customers = [
        {
            name: 'Flyod Johntosan',
            email: 'johntosan@gmail.com',
            status: 'Success',
            date: 'Nov 02, 2021',
            invoice: '100,00',
            gender: 'male',
            peoples: [{ name: 'A', image: profile1 }, { name: 'B', image: maleProfile }, { name: 'C', image: femaleProfile }, { name: 'D', image: maleProfile }, { name: 'E', image: profile1 }, { name: 'F', image: femaleProfile }, { name: 'G', image: maleProfile }, { name: 'H', image: profile1 }]
        },
        {
            name: 'Flyod Johntosan',
            email: 'johntosan@gmail.com',
            status: 'Pending',
            date: 'Nov 02, 2021',
            invoice: '100,00',
            gender: 'male',
            peoples: [{ name: 'A', image: femaleProfile }, { name: 'B', image: profile1 }, { name: 'C', image: maleProfile }]
        }
    ]
    const onChangeCalendarDate = (day) => {
        setSelectedDate(day)
    }

    const handleMonthClick = (e) => {
        setSelectedMonth(e.key)
    };

    const columns = [
        {
            title: 'Customer',
            key: 'customer',
            dataIndex: 'customer',
            render: (_, tags) => (
                <>
                    <div>
                        <Row>
                            <Avatar src={tags.gender === 'male' ? maleProfile : femaleProfile} className="self-center mr-2" />
                            <div>
                                <p className="font-medium">{tags.name}</p>
                                <p className="text-[#c7cbd0]">{tags.email}</p>
                            </div>
                        </Row>

                    </div>
                </>
            ),
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, tags) => (
                <>
                    <div className="rounded-full border-inherit">
                        <ul className="list-disc">
                            <li className={tags.status === 'Success' ? 'text-[#43c969]' : tags.status === 'Pending' ? 'text-[#f4b14c]' : "text-red"}><p className="text-black">{tags.status}</p></li>
                        </ul>
                    </div>
                </>
            ),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (_, tags) => (
                <p className="font-medium">{tags.date}</p>
            ),
        },
        {
            title: 'Invoice',
            dataIndex: 'invoice',
            key: 'invoice',
            render: (_, tags) => (
                <>
                    <p className="font-medium">${tags.invoice}</p>
                </>
            ),
        },
        {
            title: 'People',
            dataIndex: 'people',
            key: 'people',
            render: (_, customer) => (
                <>
                    <Avatar.Group
                        maxCount={3}
                        maxStyle={{
                            color: '#f56a00',
                            backgroundColor: '#fde3cf',
                        }}
                    >
                        {customer.peoples.map((people) => (
                            <Avatar size={35} src={people.image} />
                        ))}
                    </Avatar.Group>
                </>
            )
        },
    ];

    const menuProps = {
        items: Months,
        onClick: handleMonthClick,
    };

    return (

        <div className='overflow-auto h-screen'>
            <Row className="m-5 md:flex-nowrap header">
                <Row className="flex-row md:flex-nowrap header">
                    <Badge count={3} color="blue" size="large" className="self-center">
                        <Avatar size={50} src={maleProfile} />
                    </Badge>
                    <div className="ml-6">
                        <p className="font-semibold text-xl md:text-3xl">Good Evening Team!</p>
                        <p className="text-[#c7cbd0]">Have an in-depth look at all the metrics within your dashboard.</p>
                    </div>
                    <div className="ml-auto self-center">
                        <Avatar size={'large'} icon={<SearchOutlined />} className="search-icon cursor-pointer" />
                    </div>
                </Row>
                <Row className="header-notification hidden md:flex">
                    <span class="relative inline-block self-center mr-11 ml-7">
                        <BellOutlined className="text-[#b7bcc2] text-xl" />
                        <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full"></span>
                    </span>
                    <div className="ml-auto hidden self-center md:block">
                        <Dropdown menu={{ items: [], onClick: handleMonthClick }} placement="top" arrow={{ pointAtCenter: true }}>
                            <Button icon={<Avatar src={maleProfile} />} className="h-10 rounded-full">
                                <Space>
                                    Jhontosan
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </div>
                </Row>
            </Row>
            <Row>
                <Col flex={3}>
                    <div className="p-5">
                        <Card className="bg-[#6e63e5] p-2.5 main-card">
                            <Row className="main-card">
                                <div className="flex flex-row">
                                    <img class="rounded-full border border-gray-100 shadow-sm w-12 h-12 self-center" src={image1} alt="Monthly Revenue" />
                                    <div className="ml-4 text-white">
                                        <p>Monthly Revenue</p>
                                        <div className="flex flex-row mt-2">
                                            <p className="text-xl self-center">$3.500</p>
                                            <div className="rounded-full bg-white text-[#6e63e5] text-base font-bold p-1 ml-2">
                                                +2.4%
                                            </div>
                                        </div>
                                        <div className="flex flex-row mt-2">
                                            <p>Previous month </p>
                                            <p className="font-bold ml-0.5">$1.7k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <img class="rounded-full border border-gray-100 shadow-sm w-12 h-12 self-center" src={image2} alt="Monthly Sales" />
                                    <div className="ml-4 text-white">
                                        <p>Monthly Sales</p>
                                        <div className="flex flex-row mt-2">
                                            <p className="text-xl self-center">$6.750</p>
                                            <div className="rounded-full bg-white text-[#6e63e5] text-base font-bold p-1 ml-2">
                                                +1.4%
                                            </div>
                                        </div>
                                        <div className="flex flex-row mt-2">
                                            <p>Previous month </p>
                                            <p className="font-bold ml-0.5">$3.1k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <img class="rounded-full border border-gray-100 shadow-sm w-12 h-12 self-center" src={image3} alt="Monthly Revenue" />
                                    <div className="ml-4 text-white">
                                        <p>Total Profit</p>
                                        <div className="flex flex-row mt-2">
                                            <p className="text-xl self-center">$10.900</p>
                                            <div className="rounded-full bg-white text-[#6e63e5] text-base font-bold p-1 ml-2">
                                                +4.3%
                                            </div>
                                        </div>
                                        <div className="flex flex-row mt-2">
                                            <p>Previous month </p>
                                            <p className="font-bold ml-0.5">$8.9k</p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Card>
                        <Card className="mt-5">
                            <Row className="justify-between">
                                <div>
                                    <h1 className="font-medium text-xl">Total Sales & Cost</h1>
                                    <p className="text-[#c7cbd0]">Last 60 days</p>
                                    <div className="absolute md:bottom-1.5">
                                        <div className="flex flex-row">
                                            <p className="text-3xl text-[#6e63e5] font-bold">$956.82k</p>
                                            <div className=" flex flex-row gap-1 rounded-full bg-[#b3f3cb] self-center text-[#88e3a5] p-1 ml-2 h-6">
                                                <CaretUpOutlined /><p className="text-xs font-bold">+5.4%</p>
                                            </div>
                                        </div>
                                        <span className="text-[#88e3a5]">+8.20k</span><span className="text-[#c7cbd0]"> vs prev 60 days</span>
                                    </div>
                                </div>
                                <div className="graph">
                                    <Row>
                                        <div>
                                            <span className="font-semibold">Analytic</span><span className="text-[#88e3a5]"> +5.4%</span>
                                        </div>
                                        <div className="ml-auto">
                                            <Dropdown menu={{
                                                items: Months,
                                                onClick: (e) => { setSelectedMonthOfGraph(e.key) },
                                            }} className="ml-auto" placement="top" arrow={{ pointAtCenter: true }}>
                                                <Button>
                                                    <Space>
                                                        {selecetdMonthOfGraph}
                                                        <DownOutlined />
                                                    </Space>
                                                </Button>
                                            </Dropdown>
                                        </div>
                                    </Row>
                                    <div className="mt-1 p-1">
                                        <CustomBar data={barGraphData} />
                                    </div>
                                </div>
                            </Row>
                        </Card>
                        <Row className="mt-5">
                            <p className="text-2xl font-semibold">Transastion History</p>
                            <Dropdown menu={menuProps} className="ml-auto" placement="top" arrow={{ pointAtCenter: true }}>
                                <Button icon={<CalendarOutlined />}>
                                    <Space>
                                        {selectedMonth}
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </Row>
                        <div className="mt-5 space-x-5">
                            <Dropdown menu={{
                                items: [],
                                onClick: () => { },
                            }} className="bg-[#dfe2e7]" placement="top" arrow={{ pointAtCenter: true }}>
                                <Button>
                                    <Space>
                                        Recipient
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>

                            <Dropdown menu={{
                                items: [],
                                onClick: () => { },
                            }} className="bg-[#dfe2e7]" placement="top" arrow={{ pointAtCenter: true }}>
                                <Button>
                                    <Space>
                                        Amount
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>

                            <Dropdown menu={{
                                items: Status,
                                onClick: (e) => { setSelectedStatus(e.key) },
                            }} className="bg-[#dfe2e7]" placement="top" arrow={{ pointAtCenter: true }}>
                                <Button>
                                    <Space>
                                        {selectedStatus}
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                        <Table columns={columns} dataSource={customers} pagination={false} className="mt-5" />
                    </div>
                </Col>
                <Col flex={2}>
                    <div className="p-5">
                        <div className="hidden md:block">
                            <p className="text-[#6e63e5]">Premium Access</p>
                            <p className="mt-1 text-xl font-semibold">Take Back</p>
                            <p className="text-xl font-semibold">Your Creative</p>
                            <span>
                                <p className="text-xl font-semibold">Control</p>
                                <Avatar.Group
                                    maxCount={3}
                                    maxPopoverTrigger="click"
                                >
                                    <Avatar src={femaleProfile} />
                                    <Avatar src={profile1} />
                                    <Avatar src={maleProfile} />
                                    <Avatar size={35} src={femaleProfile} />
                                    <Avatar src={profile1} size={35} />
                                    <Avatar size={35} src={maleProfile} />
                                    <Avatar size={35} src={femaleProfile} />
                                </Avatar.Group>
                            </span>
                        </div>
                        <div className="mt-1">
                            <Dropdown
                                menu={{
                                    items: [],
                                }}
                                trigger={['click']}
                            >
                                <a className="hover:text-blck" onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        The Professional Platform
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className="mt-6">
                            <button type="button" class="w-full text-blue-500 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                                <p className="text-blue">Upgrade Now</p>
                                <svg className="w-3.5 h-3.5 ml-2 text-blue ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                        <Divider />
                        <div>
                            <WeekCalendar showDetailsHandle={onChangeCalendarDate} />
                        </div>
                        <div>
                            {
                                scheduleOfDay.map((schedule) => (
                                    <Row>
                                        <Col span={5} className="self-center">
                                            <img src={schedule.image} className="w-8 h-8" />
                                        </Col>
                                        <Col span={19}>
                                            <p className="font-semibold text-lg">{schedule.subject}</p>
                                            <Row className="mt-2">
                                                <VideoCameraOutlined className="text-lg text-gray-500" />
                                                <p className="text-gray-500 ml-2">{schedule.location}</p>
                                                <ClockCircleOutlined className="ml-4 text-lg text-gray-500" />
                                                <p className="text-gray-500 ml-2">{schedule.time}</p>
                                            </Row>
                                        </Col>
                                        <Divider />
                                    </Row>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;