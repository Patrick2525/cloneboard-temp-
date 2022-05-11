import React, {useRef, useState} from 'react'
import BoardItem from './BoardItem';
import BoardForm from './BoardForm';

function Page() {
    const SelectedRow = useRef();
    const inputTitle = useRef();
    const inputName = useRef();
    const [state, setState] = useState({
        maxNo : 3,
        board : [
            {
                brdno: 1,
                brdwriter: 'Lee Sunsin',
                brdtitle: 'If you intend to live then you die',
                brddate: new Date(),
            }, {
                brdno: 2,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
                brddate: new Date(),
            },
        ],
    });
    const [inputState, setInputState] = useState({});

    const {board} = state;

    const handleSaveData = (data) => {
        setState({
            maxNo: state.maxNo + 1, // 동작 원리가 뭔지? 먼저 수식계산했는데도 아래 적용이 안됨
            board: state.board.concat({ brdno: state.maxNo, brddate: new Date(), ...data})
        });
        console.log(state.maxNo);
    }

    const handleRemove = (e) => {
        console.log(e);
        
        console.log(SelectedRow);

        // setState({
        //     maxNo: state.maxNo,
        //     board: state.board.filter(row => row.brdno !== selectedRow.brdno)
        // })
        // console.log(selectedRow.brdno);
    }
    
    const handleEditRow = (row) => {

    }

    const handleEdit = () => {
        
    }

    const handleChange = (e) => {
        setInputState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSaveData(inputState);
        setInputState({});
        inputTitle.current.value ='';
        inputName.current.value = '';
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputTitle} placeholder='title' name='brdtitle' onChange={handleChange}/>
                <input ref={inputName} placeholder='name' name='brdwriter' onChange={handleChange}/>
                <button type='submit'>Save</button>
            </form>
            <table border = '1'>
                <tbody>
                    <tr align='center'>
                        <td width='50'>No.</td>
                        <td width='300'>Title</td>
                        <td width='100'>Name</td>
                        <td width='100'>Date</td>
                    </tr>
                    {
                        board.map(row => { return(
                            // 재작성해야함
                            <tr key={row.brdno} row={row} ref={SelectedRow} > 
                                <td>{row.brdno}</td>
                                <td>{row.brdtitle}</td>
                                <td>{row.brdwriter}</td>
                                <td>{row.brddate.toLocaleDateString('ko-KR')}</td>
                                <td on><button onClick={handleEdit}>Edit</button></td>
                                <td><button onClick={handleRemove}>X</button></td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Page