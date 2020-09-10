import React from 'react';
import { Link } from 'react-router-dom';

export default function CrosswordListItem ({crossword}) {
    return (
        <p><Link to={`/crosswords/${crossword.id}`}>{crossword.title}</Link></p>
    )
}