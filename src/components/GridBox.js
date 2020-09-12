import React from 'react';

export default function GridBox ({letter}) {
    return (
        <div className={`${letter === '.' ? 'box empty' : 'box'}`}>
            {letter === '.' ? '' : <input className='box-input' type='text' maxLength='1' ></input>}
        </div>
    )
}