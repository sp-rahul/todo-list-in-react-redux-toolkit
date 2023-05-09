import React from "react";
import "../App.css";
import "antd/dist/reset.css";
import  "@ant-design/icons"


import "../App.css";
import "antd/dist/reset.css";
import  "@ant-design/icons"


import { Form, Row, Col, Button, Input,  Modal } from "antd";

import { PlusCircleFilled , FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState, useEffect   } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo, editToDo, toggleComplete } from './todosSlice';


import { Checkbox } from 'antd';
import { List } from "antd";
// const data = [


function Todos() {
    const [open, setOpen] = useState(false)
    const [addTask, setAddTask] = useState('')
    const [selectedId, setSelectedId] = useState('')
    const [time, setTime] =useState('')



    const todo = useSelector((state) => state.toDo.todoList)
    const dispatch = useDispatch()

    const handleEditModal = (item) => {
        setOpen(true);
        setAddTask(item.title)
        setTime(item.time)
        setSelectedId(item.id)
        // console.log(selectedId, editTask)
    }


   
   
    // else{

    //       localStorage.setItem('todo', JSON.stringify(todo));
    
    //  }

    // useEffect(() => {
    //     const storedData = localStorage.getItem('todos');
    //     if (storedData) {
    //         const dataFromStorage = JSON.parse(storedData)
    //         // const sortedData=sortedDataFunc(dataFromStorage)
    //          setTodos(dataFromStorage);
    //     } else{

    //         localStorage.setItem('todos', JSON.stringify(todos));

    //     }

    //   }, []);

    //   const SetItems = (todos)=>{

    //     //setTodos(todos);
    //     localStorage.setItem('todo', JSON.stringify(todos));
    //   }

    

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
                               // onClick={() => dispatch(addToDo())}

                                onChange={(e) =>setAddTask(e.target.value)}
                                placeholder="What needs to be done?" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                        <Button type="primary" htmlType="submit" block onClick={() =>  dispatch(addToDo({title:addTask}))}>
                            <PlusCircleFilled />
                            Add todo
                        </Button>
                    </Col>
                </Row>
            </Form>
            
            <List
                    itemLayout="horizontal"
                    dataSource={todo}
                    renderItem={(item, index) => (

                        <List.Item
                            actions={[
                                <Button type="dashed" onClick={() =>  dispatch(deleteToDo({id: item.id}))}>
                                <DeleteOutlined />
                                Delete
                            </Button>,
                             <Button type="dashed"  onClick={() => handleEditModal(item)} block>
                                <FormOutlined />
                                Edit
                            </Button>

                        ]} >

                            <List.Item.Meta
                                avatar={<Checkbox value="C"  type="checkbox" 
                                checked={item.completed}
                                 onChange={() => dispatch(toggleComplete({...item, completed: !item.completed})) } 
                                ></Checkbox>}
                          

                                title={<a>{item.title}</a>}
                                description={<a>{item.time}</a>}

                            />

                        </List.Item>
                    )}
                />
            <Modal
                title="Edit"
                centered
                open={open}

                onOk={() => {
                    dispatch(editToDo({ title : addTask, id: selectedId, time: time}))
                    setOpen(false)
                    }
                }
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <Input
                     //value={todo.title}
                    

                    value={addTask}
                    //defaultValue={item.title}
                    onChange={(e) =>setAddTask(e.target.value)}


                />

                {/*<p>{modalText}</p>*/}
            </Modal>
        </div>
    );
}


export default Todos;




