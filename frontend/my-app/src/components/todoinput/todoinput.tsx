import React , {useState} from 'react';


function TodoInput(props:any){
    const [text,settext] = useState("");
    
    const intirestyle = {
        marginLeft:"24vw",
        height:"2vw"
    }
    const textboxstyle={
        width:"45vw",
    }
    
    function handleChange(e:any){
            settext(e.target.value)
        }

    function handleKeyPress(e:any){
        if (e.key === "Enter"){
            props.added(text);
            settext("");
        }
    }

    function onClick(){
        props.added(text)
        settext("");
    }

    return(
        <div style={intirestyle} onKeyPress={handleKeyPress}>
        <input style={textboxstyle} value={text} type="text" onChange={handleChange} placeholder="todo"/>
        <button onClick={onClick} >Add</button>
        </div>
    )
}
export default TodoInput;
