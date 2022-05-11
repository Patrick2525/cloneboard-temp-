import React, {useState, useRef, forwardRef, useImperativeHandle } from 'react'

function BoardForm(props, ref) {
    const [state, setState] = useState({});
    const inputTitle = useRef();
    const inputName = useRef();

    const handleChange = (e) => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSaveData(state);
        setState({});
        inputTitle.current.value ='';
        inputName.current.value = '';
    }

    const handleSelectRow = (row) => {
        
        console.log(row);
        //setState(row);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputTitle} placeholder='title' name='brdtitle' onChange={handleChange}/>
            <input ref={inputName} placeholder='name' name='brdwriter' onChange={handleChange}/>
            <button type= 'submit'>Save</button>
        </form>
    )
}

export default BoardForm