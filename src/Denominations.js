import React, { Component } from 'react';
import DenominationsApi from './api/denominationsApi';

class Denominations extends Component {
    state = {
        denominations: DenominationsApi.getAllDenominations()
    }

    render() {
        var createDenominationRow = function(denomination) {
            return (
                <li>{denomination.name}</li>
            );
        };

        return (
            <ul>
                {this.state.denominations.map(createDenominationRow, this)}
            </ul>
        );
    }
}

export default Denominations;