import React from 'react';

export default function GridBox ({letter, num}) {
    return (
        <div className={`${letter === '.' ? 'box empty' : 'box'}`}>
            {num === 0 ? '' : <span className='box-label'>{num}</span>}
            {letter === '.' ? '' : <input className='box-input' type='text' maxLength='1' ></input>}
        </div>
    )
}