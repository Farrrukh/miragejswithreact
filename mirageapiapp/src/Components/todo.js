import React, { useEffect,useState } from 'react'



let baseUrl = 'fakeapi'

const Todo = () => {
    const [datas,setData]=useState({})
    // useEffect(() => {
    //     fetch(`/${baseUrl}/getTodo`)
    //         .then(res => res.json)
    //         .then(data => console.log(data))
    // })

    const addTodoHandler = () => {
        fetch(`/${baseUrl}/addTodo`, {
            method: 'POST',
            body: { 'id': 3, 'text': 'Farrukh Khan' }
        })
            .then(res => console.log("SUCCESS", res))
            .catch(error => console.log('Error', error))
    }

    const getDataHandlers=()=>{
        fetch(`/${baseUrl}/getTodo`)
        .then(res => res.json)
        .then(data =>{setData(data.todo)
                console.log(data)        
        }  
            
            )
    }
    return (
        <div>
            Hello From Todo
            <button onClick={addTodoHandler}>ADD TODO</button>
            <button onClick={getDataHandlers}>GET TODO</button>
            {
                JSON.stringify(datas)
            }
        </div>
    )
}

export default Todo
