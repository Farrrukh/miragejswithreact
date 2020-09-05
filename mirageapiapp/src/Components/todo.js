import React, { useEffect } from 'react'

let baseUrl='fakeapi'
useEffect(()=>{
    fetch(`/${baseUrl}/getTodo`)
    .then(res=>res.json)
    .then(data=>console.log(data))
})
const Todo = () => {
    return (
        <div>
            
        </div>
    )
}

export default Todo
