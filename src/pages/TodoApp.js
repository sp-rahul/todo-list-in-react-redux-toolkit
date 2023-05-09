import React from "react";
import "../App.css";
import "antd/dist/reset.css";
import  "@ant-design/icons"


import { Form, Row, Col, Button, Input,  Modal } from "antd";
import { PlusCircleFilled , FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState, useEffect  } from 'react';


import { Checkbox } from 'antd';
import { List } from "antd";
// const data = [

const a=[
    {
        id:1,
        title: "Ant Design Title 1",
        time: new Date().toLocaleString(),
        completed: true,
    },
    {
        id:2,
        title: "Ant Design Title 2",
        time: new Date().toLocaleString(),
        completed: false,
    },
    {
        id:3,
        title: "Ant Design Title 3",
        time: new Date().toLocaleString(),
        completed: false,
    },
    {
        id:4,
        title: "Ant Design Title 4",
        time: new Date().toLocaleString(),
        completed: false,
    },
]

function TodoApp() {

    const [newTask, setNewTask]= useState('')
    const [open, setOpen] = useState(false)
    const [addTask, setAddTask] = useState(' ')
    const [index, setIndex] = useState(' ')

// const todoData=JSON.parse(localStorage.getItem('data'))
    // const sortedTodoList=todoData.length ? todoData.sort((a,b)=>new Date(a.time)-new Date(b.time)):[]



    const [data, setData] = useState(a);


    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            const dataFromStorage = JSON.parse(storedData)
            const sortedData=sortedDataFunc(dataFromStorage)
            setData(sortedData);
        } else{

            localStorage.setItem('data', JSON.stringify(data));

        }
console.log(a)
      }, []);

    //   useEffect(() => {
    //     if(data.length != 0){
    //         localStorage.setItem('data', JSON.stringify(data));
    //     }

    //   }, [data]);


// Delete from list
    const deleteTask = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        // setData(newData);
        SetItem(newData)
      };


      const SetItem = (data)=>{

        setData(data);
        localStorage.setItem('data', JSON.stringify(data));
      }

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
      const editTask = () => {
        const updatedItems = [...data];
        updatedItems[index].title = newTask;
        updatedItems[index].time = new Date().toLocaleString();



        const sortUpdatedItems = sortedDataFunc(updatedItems)

        //const sortUpdatedItems = updatedItems.sort((a,b) => new Date(a.time) - new Date(b.time))
        SetItem(sortUpdatedItems)
        setOpen(false)
      }

 // Toggle for check
      const toggleCompleted = (index) => {
        const newData = [...data];
        newData[index].completed = !newData[index].completed;
        SetItem(newData)
      };

      // sorting function



    const sortedDataFunc = (data) => {
        const sortedItems = data.sort((a,b) => new Date(a.time) - new Date(b.time))
        return sortedItems
    }




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



