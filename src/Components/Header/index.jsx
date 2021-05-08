
import React from 'react';
import './index.css' 

export default class Header extends React.Component{
    constructor(props){
        super(props);        
        this.state = {list:[]};
    }
        
    render(){
        return (
		<div className="header">
			<div className="header-Left">
                <button >Company Logo</button>
            </div>
			<div className="header-Right">
                      <span className="h-icon">
                        <svg height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
                      </span>
                      <span className="h-title">Transfer</span>
                      <span className="NK">NK</span>
                     <span className="NK-name">Nathan Keller</span>
          </div>
		    </div>

        );}
}
     