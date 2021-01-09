import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class Block extends Component {
    render() {
        return (
            <div className="display-group">
                <ul>
                    <li>
                        <Dropdown  className="drop-down">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                All Category
                    </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown  >
                    </li>
                    <li>
                        <Dropdown   className="drop-down">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                               Two Wheeler
                    </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown  className="drop-down">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                               Three Wheeler
                    </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown  className="drop-down">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Charging points
                    </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Block;
