import React from 'react';
import { Container } from 'react-bootstrap';
import Grid from './Grid';
import Clues from './Clues';

export default function Crossword ({ chosenCrswd }) {
    return (
        <Container>
            <Grid />
            <Clues />
        </Container>
    )
}