import React from 'react';
import { Container } from 'react-bootstrap';

export default function Header() {
    return (
        <header data-cy="header-background">
            <Container>
                <div className='wrapper'>
                    <h2 data-cy="header-title">TO DO LIST APP</h2>
                </div>
            </Container>
        </header>
    )
}
