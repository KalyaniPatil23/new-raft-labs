import { useState } from "react";
import { Row, Col, Button } from "antd";
import {
    format,
    startOfWeek,
    addDays,
    isSameDay,
    lastDayOfWeek,
    getWeek,
    addWeeks,
    subWeeks
} from "date-fns";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const WeekCalendar = ({ showDetailsHandle }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
    const [selectedDate, setSelectedDate] = useState(new Date());

    const changeWeekHandle = (btnType) => {
        if (btnType === "prev") {
            setCurrentMonth(subWeeks(currentMonth, 1));
            setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
        }
        if (btnType === "next") {
            setCurrentMonth(addWeeks(currentMonth, 1));
            setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
        }
    };

    const onDateClickHandle = (day, dayStr) => {
        setSelectedDate(day);
        showDetailsHandle(dayStr);
    };

    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";
        return (
            <Row className="mb-5">
                <Col span={12} className="self-center">
                    <span className="font-bold tet-large">{format(currentMonth, dateFormat)}</span>
                </Col>
                <Col span={12}>
                    <Row>
                        <div className="ml-auto">
                            <Button type="primary" shape="circle" icon={<LeftOutlined />} onClick={() => changeWeekHandle("prev")} className="bg-white text-black" />
                            <Button type="primary" shape="circle" icon={<RightOutlined />} onClick={() => changeWeekHandle("next")} className="bg-white text-black ml-5" />
                        </div>
                    </Row>
                </Col>
            </Row>
        );
    };
    const renderDays = () => {
        const dateFormat = "EEE";
        const days = [];
        let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        for (let i = 0; i < 7; i++) {
            days.push(
                <Col span={3} key={i} className="text-base text-[#c7cbd0] text-center">
                    {format(addDays(startDate, i), dateFormat)}
                </Col>
            );
        }
        return <Row justify={'space-evenly'}>{days}</Row>;
    };
    const renderCells = () => {
        const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <Col
                        span={3}
                        className={`text-base text-center`}
                        key={day}

                    >
                        <Button
                            type={isSameDay(day, selectedDate) ? "primary" : 'default'}
                            shape="circle"
                            onClick={() => {
                                const dayStr = format(cloneDay, "ccc dd MMM yy");
                                setCurrentMonth(cloneDay)
                                onDateClickHandle(cloneDay, dayStr);
                            }}
                            className={`${isSameDay(day, selectedDate) ? 'bg-[#6e62e5]' : 'border-none'}`}
                        > {formattedDate}</Button>
                    </Col>
                );
                day = addDays(day, 1);
            }

            rows.push(
                <Row justify={'space-evenly'} key={day} className="mt-5">
                    {days}
                </Row>
            );
            days = [];
        }
        return <div>{rows}</div>;
    };

    return (
        <div className="mb-9">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
};

export default WeekCalendar;
