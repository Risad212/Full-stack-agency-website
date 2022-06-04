import React, { useState } from 'react';

const Dropdown = ({ elem }) => {
    const [option, setOption] = useState()
    
    console.log(elem)
    return (
        <tr>
            <td>{elem?.name}</td>
            <td>{elem?.email}</td>
            <td>{elem?.service}</td>
            <td>{elem?.discription}</td>
            <td className='text-right select' >
                <select name="status" id="" onChange={(e) => setOption(e.target.value)} style={{color: option == 'Panding'? 'red': option == 'Done'? 'green': option == 'on Going'? 'yellow': '#000'}}>
                    <option value="Status" style={{color: '#000'}}>Status</option>
                    <option value="Panding" style={{color: '#FF4545'}}>Panding</option>
                    <option value="Done" style={{color: '#009444'}}>Done</option>
                    <option value="on Going" style={{color: '#FFBD3E'}}>On Going</option>
                </select>
            </td>
        </tr>
    );
};

export default Dropdown;