import React from 'react';


import Header from "../../Components/Header/Header";
import './Homepage.css';

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <p> This is the homepage. </p>
                <h1 className="hello">Hello home</h1>
            </div>
        )
    }
}