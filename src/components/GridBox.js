import React from 'react';

export default function GridBox ({letter}) {
    return (
        <div className={`${letter === '.' ? 'box empty' : 'box'}`}>
        </div>
    )
}