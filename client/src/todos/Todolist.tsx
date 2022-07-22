import axios from "../setting"
import { useState, useEffect} from "react"
import AddItem from "./AddItem"


type Todo = {
  id: number,
  name: string,
  done: boolean,
  createdAt: Date,
  updatedAt: Date,
}

type Post = {
  name: string,
  done: boolean
}


const Todolist = () => {

  const [todo_list, setTodo_List] = useState<Todo[]>([]);


  useEffect(() => {
    axios.get('/').then(res => {
      setTodo_List(res.data)
      //console.log(res)
    })
      .catch(e => {
        console.log("error:", e)
      })
  }, [todo_list])


  const changeDoneStatus = (each_todo:Todo) => {

    const new_post :Post = {
      "name":each_todo.name,
      "done":!each_todo.done
    }
    axios.put(`/${each_todo.id}`,new_post).then(() => {
      console.log("successfully updated done status!!")
    })
    .catch(e => {
      console.log("error:",e)
    })
  }


  const deleteItem = (id:number) => {
    //console.log(id)
    axios.delete(`/${id}`).then(() => {
      console.log("successfully deleted!!")
    })
    .catch(e => {
      console.log("error :",e)
    })
  }

  return (
    <div>
      <AddItem />
      <div>
        {todo_list.map(each_todo => (
          <div key={each_todo.id}>
            <p>{each_todo.name}</p>
            <p>{each_todo.done}</p>
            <p>{each_todo.id}</p>
            <button onClick={() => changeDoneStatus(each_todo)}>
                {each_todo.done ? '完' : '未'}
            </button>
            <span onClick={() => deleteItem(each_todo.id)} style={{ cursor: 'pointer' }}>
                delete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist