import React, { useState} from 'react';
import TodoInput from "../todoinput/todoinput"
import Todostable from "../todotable/todotable"
import Table from 'react-bootstrap/Table'


interface ITodo {
    id: number
    todo:string 
    iscomplete:boolean
    isdeleted:boolean
}

export function Todoscard(props:any){
    const [textarr,settextarr] = useState<ITodo[]>([])
    const[ownindex, setownindex] = useState<number>(0)

    function todoadded(todo:string){
        if(todo === ""){
            alert("you cant add nothing brov");
        }else{
        settextarr([...textarr, {id: ownindex , todo , iscomplete : false , isdeleted: false}]);
        setownindex(ownindex+ 1)
        console.table(textarr)
        }
    }
    function onremove(index:number){
      textarr[index].isdeleted = !textarr[index].isdeleted;
        settextarr([...textarr]);
    }
    function oncompleate(index:number){
      textarr[index].iscomplete = !textarr[index].iscomplete;
      settextarr([...textarr]);
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
    return <Todostable  id={c.id} todo={c.todo} remove={onremove} isremoved={c.isdeleted}  compleate={oncompleate} iscomplete={c.iscomplete}
   />})}
  </tbody>
</Table>
        
        </div>
    )
}

export default Todoscard;