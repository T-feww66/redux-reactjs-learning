import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { prioritiesFilter, searchFilter, statusFilter } from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [priorities, setPriorities] = useState([]);

    const dispatch = useDispatch();
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
        dispatch(searchFilter(e.target.value));
    };

    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
        dispatch(statusFilter(e.target.value));
    };

    const handleChangePriorities = (value) => {
        setPriorities(value);
        dispatch(prioritiesFilter(value));
    };
    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder="input search text"
                    value={search}
                    onChange={handleChangeSearch}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={status} onChange={handleChangeStatus}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: "100%" }}
                    value={priorities}
                    onChange={handleChangePriorities}
                >
                    <Select.Option value="High" label="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}
