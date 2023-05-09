import React from "react";
import "../App.css";
import "antd/dist/reset.css";
import  "@ant-design/icons"
import { createStore } from 'redux';


import { Form, Row, Col, Button, Input,  Modal } from "antd";
import { PlusCircleFilled , FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState, useEffect  } from 'react';


import { Checkbox } from 'antd';
import { List } from "antd";
// const data = [


import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions';
function TodoApp() {

const initialState = {
    data: [
        {

            title: "Ant Design Title 1",
            time: new Date().toLocaleString(),
            completed: true,
        },
        {

            title: "Ant Design Title 2",
            time: new Date().toLocaleString(),
            completed: false,
        },
        {

            title: "Ant Design Title 3",
            time: new Date().toLocaleString(),
            completed: false,
        },
        {

            title: "Ant Design Title 4",
            time: new Date().toLocaleString(),
            completed: false,
        },
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case addingData:
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        title: action.payload,
                        time: new Date().toLocaleString(),
                        completed: false,
                    }
                ]
            };
        case deleteTask:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload)
            };
        case editTask:
            const updatedData = state.data.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        title: action.payload.title,
                        time: new Date().toLocaleString(),
                    }
                }
                return item;
            });
            return {
                ...state,
                data: updatedData,
            };
        case toggleCompleted:
            const toggledData = state.data.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed,
                    }
                }
                return item;
            });
            return {
                ...state,
                data: toggledData,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todos: todoReducer,
});







// Add data in the list
    const addingData = () => {
        console.log('TODO', newTask)
        const newData = [...data];
        newData.push({
            title: addTask,
            time: new Date().toLocaleString(),
        })


        SetItem(newData)
        setAddTask('')
        document.getElementById('addTaskForm').reset();
    }

// Edit data


    return (

        <div style={{color: "red", margin:"100px"}}>
            <h2>Todo</h2>
            <Form layout="horizontal" className="todo-form" id="addTaskForm">
                <Row gutter={20}>
                    <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                        <Form.Item
                            name={"name"}
                            rules={[{ required: false, message: "This field is required" }]}
                        >
                            <Input
                                ref={() => {}}
                                defaultValue={addTask}
                                onChange={(e) =>setAddTask(e.target.value)}
                                placeholder="What needs to be done?" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                        <Button type="primary" htmlType="submit" block onClick={() => addingData()}>
                            <PlusCircleFilled />
                            Add todo
                        </Button>
                    </Col>
                </Row>


                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (

                        <List.Item
                            actions={[
                                <Button type="dashed" onClick={() => deleteTask(index)}  block>
                                    <DeleteOutlined />
                                    Delete
                                </Button>,
                                <Button type="dashed"  onClick={() =>{ setOpen(true);
                                    setNewTask(item.title)
                                    setIndex(index)
                                }
                                } block>
                                    <FormOutlined />
                                    Edit
                                </Button>

                            ]}

                        >

                            <List.Item.Meta
                                avatar={<Checkbox value="C"  type="checkbox"
                                                  checked={item.completed}
                                                  onChange={() => toggleCompleted(index)} ></Checkbox>}

                                title={<a>{item.title}</a>}
                                description={<a>{item.time}</a>}

                            />
                        </List.Item>
                    )}
                />
            </Form>
            <Modal
                title="Edit"
                centered
                open={open}

                onOk={() => {
                    editTask()
                }
                }
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <Input
                    value={newTask}
                    onChange={(e) =>setNewTask(e.target.value)}

                />

                {/*<p>{modalText}</p>*/}
            </Modal>
        </div>
    );
}


export default TodoApp;



