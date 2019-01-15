import React from 'react'

import Todo from './Todo'

export default function List(props){
    let list = props.tasks.map((ele, i) => {
        return(
            <Todo key={i} tasks={ele}/>
        )
    })
    return(
        <div>
            {list}
        </div>
    )
}