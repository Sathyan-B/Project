import React from 'react';
import SideBar from '../SideBar';
import Header from '../Header';


export default class Accounts extends React.Component{
    constructor(props){
        super(props);        
        this.state = {list:[]};
    }
        
    render(){
        return (
        <div className="main">            
            <Header/>
            <div className="container">
                <SideBar item={2}/>  
                <div className="content">
                    <span>Accounts</span>
                </div>
            </div>
     </div>


        );}
}
     