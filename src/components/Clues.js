import React from 'react';
import { Container } from 'react-bootstrap';

export default function Clues ({ crossword }) {
    return (
        <Container>
            {crossword.across_clues[0]}
        </Container>
    )
}