import React from 'react';
import SideBar from '../SideBar';
import Header from '../Header';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'

function getData(){
 	return fetch("http://localhost:3001/data")
		.then(res => {return res.json()})
		.then(data =>{ 
			return data;
		});

}

class Transfer extends React.Component{
    constructor(props){
        super(props);        
        this.state = {list:[]};
    }
  
  	componentDidMount(){
  		getData().then(data=>  this.setState({list:data}));
  	}

    handleClick(id){
        this.props.history.push("/transferView");
    }

     render(){
        return (
        <div className="main">            
            <Header/>
            <div className="container">
            	<SideBar item={1}/>	
            	<div className="content">
            	    <div className="title">Transfer List</div>
            	   <div className="list-wrapper">
                    
                        
                      
                       
                                     
                                      <table>
                                        <thead>
                                            <tr>
                                                <th>View</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                 <th>Company</th>
                                                 <th>Contact Person</th>
                                               <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {
                                             this.state.list.map(item => {
                                               
                                                 
                                                return(
                                                   
                                                    <tr>
                                                   
                                                    <td><Link to={`/transferView/${item.id}`}><span className='link'> View-{item.id}</span></Link></td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.company}</td>
                                                    <td>{item.contactPerson}</td>
                                                    <td>USD {item.amount}</td>
                                                   
                                                    </tr>

                                               )})
                                                
                                            }
                                        
                                        </tbody>
                                      </table>

                                    
                                  



            	    
                    </div>
            	</div>
            </div>
 	 </div>


        );}
}

export default withRouter(Transfer);


