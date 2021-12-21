import React from 'react';





export function Todostable(props:any){
    if(!props.isremoved){
return (
    <>
    <tr>
    
     {props.iscomplete ? <th> <h1>✔️</h1></th>:  <th><h1></h1></th>}
      {props.iscomplete ? <th><div onClick={() =>  props.compleate(props.id , !props.iscomplete)}>{props.todo} </div> </th> : <th><div onClick={() =>  props.compleate(props.id ,  !props.iscomplete)}>{props.todo} </div> </th>}
      <th><button onClick={() =>  props.remove(props.id)}>delete</button></th>
      <th></th>
      </tr>
</>
)
    }else{
        return(
            <>
            </>
        )
    }
}

export default Todostable;