import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Christianity Elucidated</h1>
                <p><Link to="/denominations">Denominations</Link></p>
            </div>
        );
    }
}

export default Home;