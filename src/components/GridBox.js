import React from 'react';

export default function GridBox ({letter}) {
    console.log('in box function', letter)
    return (
        <div className={`${letter === '.' ? 'box empty' : 'box'}`}>
        </div>
    )
}