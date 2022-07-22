import React, { useState } from 'react'
import axios from "../setting"

type Post = {
    name: string,
    done: boolean
}

const AddItem = () => {

    const [text, setText] = useState<string>("")
    //const [done, setDone] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!text) return;
        
        const post_data: Post = {
            "name": text,
            "done": false,
        }

        axios.post("/post", post_data)
            .then(res => {
                //setTodo_List([res,...todo_list])
                console.log(res)
            })
            .catch(e => {
                console.log("error:", e)
            })

        // setTodo_List([newTodo,...todo_list])
        //console.log(todos)
        setText("")

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h1>Add Item</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    type="text"
                    value={text}
                    onChange={e => handleChange(e)}
                />
                <input
                    type="submit"
                    value="追加"
                />
            </form>
        </div>

    )
}

export default AddItem