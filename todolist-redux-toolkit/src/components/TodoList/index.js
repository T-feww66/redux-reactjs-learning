import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { v4 as uuidv4 } from "uuid";

import Todo from "../Todo";
import { remeaningSelector } from "../../redux/selectors";
import todoListSlice from "./todoListSlice";

export default function TodoList() {
    const [textAddTodo, setTextAddTodo] = useState("");
    const [priorityAddTodo, setPriorityAddTodo] = useState("Medium");

    const handlecChangeTextAdd = (e) => {
        setTextAddTodo(e.target.value);
    };

    const handlecChangePriority = (value) => {
        setPriorityAddTodo(value);
    };

    const todoList = useSelector(remeaningSelector);

    const dispatch = useDispatch();
    const handleAddTodo = () => {
        dispatch(
            todoListSlice.actions.addTodo({
                id: uuidv4(),
                name: textAddTodo,
                completed: false,
                priority: priorityAddTodo,
            })
        );

        setPriorityAddTodo("Medium");
        setTextAddTodo("");
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input
                        value={textAddTodo}
                        onChange={handlecChangeTextAdd}
                    />
                    <Select
                        defaultValue={priorityAddTodo}
                        onChange={handlecChangePriority}
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
                    <Button type="primary" onClick={handleAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
