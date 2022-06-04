import React, { useState } from 'react';

const Dropdown = ({ elem }) => {
    const [option, setOption] = useState()
    
    console.log(option)
    return (
        <tr>
            <td>{elem?.name}</td>
            <td>{elem?.name}</td>
            <td>{elem?.service}</td>
            <td>{elem?.discription}</td>
            <td className='text-right select' >
                <select name="status" id="" onChange={(e) => setOption(e.target.value)} style={{color: option == 'Panding'? 'red': option == 'Done'? 'green': option == 'on Going'? 'yellow': '#000'}}>
                    <option value="Status" style={{color: '#000'}}>Status</option>
                    <option value="Panding" style={{color: 'red'}}>Panding</option>
                    <option value="Done" style={{color: 'green'}}>Done</option>
                    <option value="on Going" style={{color: 'yellow'}}>On Going</option>
                </select>
            </td>
        </tr>
    );
};

export default Dropdown;