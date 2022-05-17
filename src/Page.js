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
    const [inputState, setInputState] = useState({
        brdwriter:'',
        brdtitle:'',
    });

    const {board} = state;

    const handleSaveData = (data) => {
        let board = state.board;
        if(data.brdno===null || data.brdno==='' || data.brdno === undefined) {
            setState({
                maxNo: state.maxNo + 1, // 동작 원리가 뭔지? 먼저 수식계산했는데도 아래 적용이 안됨
                board: state.board.concat({ brdno: state.maxNo, brddate: new Date(), ...data})
            });
        } else {
            setState({
                maxNo: state.maxNo,
                board: board.map(row => data.brdno === row.brdno ? {...data}: row)
            })
        }
        
    
    }

    const handleRemove = (brdno) => {

        setState({
            maxNo: state.maxNo,
            board: state.board.filter(row => row.brdno !== brdno)
        })
        console.log(brdno);
    }
    
    const handleEdit = (row) => {
        inputTitle.current.value = row.brdtitle;
        inputName.current.value = row.brdwriter;
        setInputState(row);
        // 화면에 뿌려야 됨
        
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
                            <tr key={row.brdno}> 
                                <td>{row.brdno}</td>
                                <td>{row.brdtitle}</td>
                                <td>{row.brdwriter}</td>
                                <td>{row.brddate.toLocaleDateString('ko-KR')}</td>
                                <td><button onClick={() => handleEdit(row)}>Edit</button></td>
                                <td><button onClick={() => handleRemove(row.brdno)}>X</button></td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Page