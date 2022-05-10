import React, {useRef, useState} from 'react'
import BoardItem from './BoardItem';
import BoardForm from './BoardForm';

function Page() {
    const childRef = useRef();
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

    const {board} = state;

    const handleSaveData = (data) => {
        setState({
            maxNo: state.maxNo + 1, // 동작 원리가 뭔지? 먼저 수식계산했는데도 아래 적용이 안됨
            board: state.board.concat({ brdno: state.maxNo, brddate: new Date(), ...data})
        });
        console.log(state.maxNo);
    }

    const handleRemove = (brdno) => {
        setState({
            maxNo: state.maxNo,
            board: state.board.filter(row => row.brdno !== brdno)
        })
    }
    
    const handleEditRow = (row) => {
        //childRef.current.handleSelectRow(row);
    }

    return (
        <div>
            <BoardForm onSaveData={handleSaveData} /*ref={childRef}*//>
            <table border = '1'>
                <tbody>
                    <tr align='center'>
                        <td width='50'>No.</td>
                        <td width='300'>Title</td>
                        <td width='100'>Name</td>
                        <td width='100'>Date</td>
                    </tr>
                    {
                        board.map(row => (<BoardItem key={row.brdno} row={row} onRemove={handleRemove} onEditRow={handleEditRow} />))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Page
