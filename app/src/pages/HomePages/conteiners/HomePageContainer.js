import { Component } from 'react';
import HomePageLoyout from '../components/HomePageLoyout';

class HomePageContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userList: [
                {
                    name: "Natallia",
                    age: 27,
                },
                {
                    name: "Alex",
                    age: 32,
                },
                {
                    name: "Siarhei",
                    age: 29,
                },
            ]
        }
    }

    handleUserFaund = (index) => {
        const faundUser = this.state.userList[index];

        console.log(faundUser)
    }


    render() {
        return (
            <HomePageLoyout userList={this.state.userList} handleUserFaund={this.handleUserFaund} />
        );
    }
}

export default HomePageContainer