import React, {useState} from 'react'
import BoardItem from './BoardItem';
import BoardForm from './BoardForm';

function Page() {
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
            board: state.board.concat({ brdno: state.maxNo++, brddate: new Date(), ...data})
        });
    }

    return (
        <div>
            <BoardForm onSaveData={handleSaveData}/>
            <table border = '1'>
                <tbody>
                    <tr align='center'>
                        <td width='50'>No.</td>
                        <td width='300'>Title</td>
                        <td width='100'>Name</td>
                        <td width='100'>Date</td>
                    </tr>
                    {
                        board.map(row => (<BoardItem key={row.brdno} row={row}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Page