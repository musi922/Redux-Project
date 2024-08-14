import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../src/features/Theme';

const ChangeColor = () => {
    const [color, setColor] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" onChange={(e)=>setColor(e.target.value)} className='bg-slate-200 '/>
            <button onClick={()=>dispatch(changeColor(color))}>Change Color</button>
        </div>
    );
}

export default ChangeColor;
