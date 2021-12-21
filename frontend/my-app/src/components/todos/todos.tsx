import React, { useEffect, useState} from 'react';
import TodoInput from "../todoinput/todoinput"
import Todostable from "../todotable/todotable"
import Table from 'react-bootstrap/Table'
import axios from 'axios';




interface ITodo {
    id: number
    todo:string 
    iscomplete:boolean
    isdeleted:boolean
}

export function Todoscard(props:any){
    const [textarr,settextarr] = useState<ITodo[]>([])
    const[ownindex, setownindex] = useState<any>()


    useEffect(()=>{
      axios.get('http://localhost:9090/v1/todos/' ).then(function (response) {
        settextarr(response.data);
        console.log(textarr)
      }).catch(function (err){
        alert(err)
      })
    },[])

    function uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    

    function todoadded(todo:string){
      setownindex(uuid())
        if(todo === ""){
            alert("you cant add nothing brov");
        }else{
          axios({ 
          method: 'post',
          url :'http://localhost:9090/v1/todos/' , 
          data : {id: uuid() , todo , iscomplete : false , isdeleted: false},
        }
        ).then(function (res) {
            console.log(res)
          }).catch(function (err) {
           alert(err)
          })
          axios.get('http://localhost:9090/v1/todos/' ).then(function (response) {
            settextarr(response.data);
          })
        // settextarr([...textarr, {id: ownindex , todo , iscomplete : false , isdeleted: false}]);
        // console.table(textarr)
        window.location.reload();
        }
    }
    function onremove(index:number){
      axios({ 
        method: 'delete',
        url :'http://localhost:9090/v1/todos/' , 
        data : {id: index}
      }
      ).then(function (res) {
          console.log(res)
        }).catch(function (err) {
         alert(err)
        })
        axios.get('http://localhost:9090/v1/todos/' ).then(function (response) {
        settextarr(response.data);
        console.log(textarr)
      }).catch(function (err){
        alert(err)
      })
      window.location.reload();
    }
    function oncompleate(index:number , status:boolean) {
      axios({ 
        method: 'post',
        url :'http://localhost:9090/v1/todos/true' , 
        data : {
          id: index ,
          status:status
        }
      }
      ).then(function (res) {
          console.log(res)
        }).catch(function (err) {
         alert(err)
        })
        axios.get('http://localhost:9090/v1/todos/' ).then(function (response) {
        settextarr(response.data);
        console.log(textarr)
      }).catch(function (err){
        alert(err)
      })
      window.location.reload();
    }
    return(
        <div className="todoapp">
        <TodoInput added={todoadded}/>
        <Table responsive bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>todo</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
   {textarr.map((c:any) => {
    return <Todostable  id={c.data.id} todo={c.data.todo} remove={onremove} compleate={oncompleate} iscomplete={c.data.iscomplete} key ={c.data.id}
   />})}
  </tbody>
</Table>
        
        </div>
    )
}

export default Todoscard;