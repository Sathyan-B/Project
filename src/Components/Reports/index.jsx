import React from 'react';
import SideBar from '../SideBar';
import Header from '../Header';


export default class Reports extends React.Component{
    constructor(props){
        super(props);        
        this.state = {list:[]};
    }
        
     render(){
        return (
        <div className="main">            
            <Header/>
            <div className="container">
                <SideBar item={4} />  
                <div className="content">
                    <span>Reports</span>
                </div>
            </div>
     </div>


        );}
}
     