import React from 'react';
import SideBar from '../SideBar';
import Header from '../Header';



export default class Home extends React.Component{
    constructor(props){
        super(props);        
        this.state = {list:[]};
    }
        
    render(){
        return (
        <div className="main">            
            <Header/>
            <div className="container">
            	<SideBar item={0}/>	
            	<div className="content">
            	    <div>Home</div>
            	</div>
            </div>
 	 </div>


        );}
}
     