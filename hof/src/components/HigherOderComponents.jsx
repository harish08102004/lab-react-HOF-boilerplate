import React, { Component } from 'react';
import UserList from './UserList';
class HigherOrderComponent extends Component{
    constructor(){
        super()
        this.state={
            userData:[
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    render(){
        const Data = this.state.userData;
        const DataBasedOnUserType = this.state.userData.filter(user => user.user_type === 'Designer');
        const DataStartingWithJ = this.state.userData.filter(user => user.name.startsWith('J'));
        const DataBasedOnage = this.state.userData.filter(user => user.age>28 && user.age<=50);
        const totalYearsOfDesigners = this.state.userData.filter(user => user.user_type === 'Designer').reduce((acc, curr) => acc + curr.years, 0);
        return(
            <div>
                <h1>All items</h1>
                <UserList data={Data}/>
                <h1>Display based on user type</h1>
                <UserList data={DataBasedOnUserType}/>
                <h1>Filter all data starting with J</h1>
                <UserList data={DataStartingWithJ}/>
                <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
                <UserList data={DataBasedOnage}/>
                <h1>Find the total years of the designers</h1>
                <p>{totalYearsOfDesigners}</p>
            </div>
        )
    }
}

export default HigherOrderComponent