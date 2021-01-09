import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Button extends Component {
    render() {
        return (
            <div>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default Button;
