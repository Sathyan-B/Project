import React from 'react';
import SideBar from '../SideBar';
import Header from '../Header';


export default class Documents extends React.Component{
    constructor(props){
        super(props);        
        this.state = {list:[]};
    }
     render(){
        return (
        <div className="main">            
            <Header/>
            <div className="container">
                <SideBar item={3}/>  
                <div className="content">
                    <span>Documents</span>
                </div>
            </div>
     </div>


        );}
}
     