import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) =>{
    axios.get(baseUrl).then(({data})=>{
        console.log('data --->',data)
        setToDo(data)
    })
    .catch((error)=> console.log(error))
}
const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(({ data }) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((error) => console.log(error));
};
const updateToDo = (toDoId,text,setText,setToDo,setIsUpdating) => {
    axios
    .put(`${baseUrl}/update`,{_id:toDoId,text})
    .then(({data})=>{
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((error)=> console.log(error))
}
const deleteToDo = (_id,setToDo) => {
    axios
    .delete(`${baseUrl}/delete`,{ data: { _id } })
    .then(({data})=>{  
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((error)=> console.log(error))
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}