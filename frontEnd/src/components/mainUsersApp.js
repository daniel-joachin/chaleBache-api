import React, { Component } from 'react'
import Test from './test';
import Map from './map';
import BacheInfo from './bacheInfo';
import Searchbar from './searchbar';
import AdminButton from './adminButton';
import { BacheProvider } from './bacheContext';


export default class MainUsersApp extends Component {
    render() {
        return (
            <div>
                <div className="headE">
                    <Searchbar id ="searchsito"></Searchbar>
                    <Test id="testsito"></Test>
                    <AdminButton id="adminsito"></AdminButton>
                </div>
            
                <div className="wrapper">
                    <BacheProvider>
                    <Map class="l"/>
                    <BacheInfo name="x" location="1,2" seriedad="10" className="infos"/>
                    </BacheProvider>
                </div>
            </div>
        )
    }
}
