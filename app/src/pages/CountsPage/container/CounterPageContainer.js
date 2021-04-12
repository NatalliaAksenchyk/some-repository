import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            parityType: 'even/odd',
        };
    }
    handlIncrement = () => {
        this.setState((state) => {
            const countValue = state.countValue + 1;
            if (countValue % 2 == 0) {
                const parityType = 'even';
                const color = 'red';
                return {
                    ...state,
                    countValue,
                    parityType,
                    color,
                };
            } else {
                const parityType = "odd";
                const color = 'green';
                return {
                    ...state,
                    countValue,
                    parityType,
                    color,
                }
            }
        });
    };

    handlReset = () => {
        this.setState({ ...this.state, countValue: 0 })
    };

    handlDecrement = () => {
        this.setState((state) => {
            const countValue = Math.max(state.countValue - 1, 0);
            if (countValue % 2 == 0) {
                const parityType = 'even';
                const color = 'red';
                return {
                    ...state,
                    countValue,
                    parityType,
                    color,
                };
            } else {
                const parityType = "odd";
                const color = 'green';
                return {
                    ...state,
                    countValue,
                    parityType,
                    color,
                }
            }


        });
    };
    render() {
        return <Counter countValue={this.state.countValue} parityType={this.state.parityType} color={this.state.color} handlIncrement={this.handlIncrement} handlDecrement={this.handlDecrement} handlReset={this.handlReset} />
    }
}

export default CounterPageContainer