import React, {useState} from 'react'

function BoardForm(props) {
    const [state, setState] = useState({});

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
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='title' name='brdtitle' onChange={handleChange}/>
            <input placeholder='name' name='brdwriter' onChange={handleChange}/>
            <button type= 'submit'>Save</button>
        </form>
    )
}

export default BoardForm