import React from 'react';
import './index.css' 

export default class SideBar extends React.Component{
    constructor(props){
        super(props);        
        this.state = {list:[]};
        this.myRef = React.createRef();

    }
   
    componentDidMount(){
    	var ul=this.myRef.current;
    	var li=ul.children[this.props.item];
    	li.firstChild.classList.add("active");   
    }
        
    render(){

    	

        return (
		<div className="sidebar">
		      <ul ref={this.myRef}>
		        <li><a href="/home" ><span>Home</span></a></li>
		        <li><a href="/transfer"><span>Transfer</span></a></li>
		        <li><a href="/accounts"><span>Accounts</span></a></li>
		        <li><a href="/documents"><span>Documents</span></a></li>
		        <li><a href="/reports"><span>Reports</span></a></li>
		      </ul>
		    </div>

        );}
}
     