import React from 'react';
import SideBar from '../SideBar';
import Header from '../Header';
// import Responsive from 'react-responsive-decorator';

function getData(){
 	return fetch("http://localhost:3000/data")
		.then(res => {return res.json()})
		.then(data =>{ 
			return data;
		});

}





export default class TransferView extends React.Component{
    constructor(props){
        super(props);        
        this.state={details:{},isMobile:false, isUpload:false};
       this.myRef = React.createRef();
      this.myList = React.createRef();
      this.myProduct = React.createRef();
      this.myShipping = React.createRef();

      

    }
    
    getDetails(id){
            getData().then(data=>  this.setState({details:data[id-1]})  );

    }

  	componentDidMount(){
            var id= this.props.match.params.id;
            this.getDetails(id);
            window.addEventListener("resize", this.updateDimensions.bind(this));
  	}

      componentWillMount(){
            window.addEventListener("resize", this.updateDimensions.bind(this));
      }

      updateDimensions(){
            if(window.innerWidth<=700){
                  this.setState({isMobile:true});
            }else{
                    this.setState({isMobile:false});                
            }
      }

      onSubmit(ev){
            ev.preventDefault();
            var files = ev.target.files;
            var str="";
             for(var i=0;i<files.length;i++){
                  str+="\n"+files[i].name;
              }

              this.myRef.current.textContent=str;

              this.setState({isUpload:true});
      }

      dragEnter(ev){
            ev.preventDefault();
      }

      dragLeave(ev){
            ev.preventDefault();
      }

      onNext(ev){

            this.myProduct.current.style.display="none";
            var shipping = this.myShipping.current;
            shipping.lastElementChild.style.display="block";

       }

      onDrop(ev){
            ev.preventDefault();
              var files= ev.dataTransfer.files;
              var str="";
              for(var i=0;i<files.length;i++){
                  str+="\n"+files[i].name;
              }
              this.setState({isUpload:true});

              this.myRef.current.textContent=str;

    }

     render(){

        var obj=this.state.details;
        var value=this.state.isUpload ? 1 :0.3;
        var isMobile=this.state.isMobile;

        var onDeviceBased=()=>{
            console.log(isMobile);
            
                  if(!isMobile){
                          
                             return (<div className="upload-wrapper" onDragEnter={this.dragEnter} onDragLeave={this.dragLeave} onDrop={this.onDrop.bind(this)}  >
                                                      <div id="myform" ref={this.myRef} onSubmit={this.onSubmit}>

                                                      <div>
                  
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
       viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"},{width:"10px"}} >
<g>
      <g>
            <path d="M380.032,133.472l-112-128C264.992,2.016,260.608,0,256,0c-4.608,0-8.992,2.016-12.032,5.472l-112,128
                  c-4.128,4.736-5.152,11.424-2.528,17.152C132.032,156.32,137.728,160,144,160h64v208c0,8.832,7.168,16,16,16h64
                  c8.832,0,16-7.168,16-16V160h64c6.272,0,11.968-3.648,14.56-9.376C385.152,144.896,384.192,138.176,380.032,133.472z"/>
      </g>
</g>
<g>
      <g>
            <path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"/>
      </g>
      </g>
</svg>


                                                            <span className="drop" style={{color:"#46c4e5"}}>Drop Proforma Invoice Here </span>
                                                            </div>
                                                            <div><span>or</span> <input id="file" className="custom-file-input" type="file" onChange= {this.onSubmit.bind(this)} multiple></input><span> from your computer</span></div>
                                                            <div>Accetable formats - .pdf, .jpg, .png, .csv, excel </div>
                                                            <div  ref={this.myList}></div>
                                                     </div>
                                               </div> )


                        }
                        else{
                              console.log("no")

                               
                            return  (<div className="upload-wrapper" onDragEnter={this.dragEnter} onDragLeave={this.dragLeave} onDrop={this.onDrop.bind(this)}  >
                                    <div id="myform" ref={this.myRef} onSubmit={this.onSubmit}>
                                          
                                          <div className="camera">
                                                      <span style={{marginRight:"7px", fill:"#FFF"}}>

<svg  version="1.1" id="Capa_1"  x="0px" y="0px"
       viewBox="0 0 420.8 420.8" style={{enableBackground:"new 0 0 420.8 420.8;", width:"13px", height:"13px"}} >
<g>
      <g>
            <g>
                  <path d="M406.8,96.4c-8.4-8.8-20-14-33.2-14h-66.4v-0.8c0-10-4-19.6-10.8-26c-6.8-6.8-16-10.8-26-10.8h-120
                        c-10.4,0-19.6,4-26.4,10.8c-6.8,6.8-10.8,16-10.8,26v0.8h-66c-13.2,0-24.8,5.2-33.2,14c-8.4,8.4-14,20.4-14,33.2v199.2
                        C0,342,5.2,353.6,14,362c8.4,8.4,20.4,14,33.2,14h326.4c13.2,0,24.8-5.2,33.2-14c8.4-8.4,14-20.4,14-33.2V129.6
                        C420.8,116.4,415.6,104.8,406.8,96.4z M400,328.8h-0.4c0,7.2-2.8,13.6-7.6,18.4s-11.2,7.6-18.4,7.6H47.2
                        c-7.2,0-13.6-2.8-18.4-7.6c-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2,2.8-13.6,7.6-18.4s11.2-7.6,18.4-7.6h77.2
                        c6,0,10.8-4.8,10.8-10.8V81.2c0-4.4,1.6-8.4,4.4-11.2s6.8-4.4,11.2-4.4h119.6c4.4,0,8.4,1.6,11.2,4.4c2.8,2.8,4.4,6.8,4.4,11.2
                        v11.6c0,6,4.8,10.8,10.8,10.8H374c7.2,0,13.6,2.8,18.4,7.6s7.6,11.2,7.6,18.4V328.8z"/>
                  <path d="M210.4,130.8c-27.2,0-52,11.2-69.6,28.8c-18,18-28.8,42.4-28.8,69.6s11.2,52,28.8,69.6c18,18,42.4,28.8,69.6,28.8
                        s52-11.2,69.6-28.8c18-18,28.8-42.4,28.8-69.6s-11.2-52-28.8-69.6C262.4,142,237.6,130.8,210.4,130.8z M264.8,284
                        c-14,13.6-33.2,22.4-54.4,22.4S170,297.6,156,284c-14-14-22.4-33.2-22.4-54.4c0-21.2,8.8-40.4,22.4-54.4
                        c14-14,33.2-22.4,54.4-22.4s40.4,8.8,54.4,22.4c14,14,22.4,33.2,22.4,54.4C287.6,250.8,278.8,270,264.8,284z"/>
                  <circle cx="352.8" cy="150" r="19.6"/>
            </g>
      </g></g>
      </svg>


                                                      </span>
                                                      <span>Use Camera</span>
                                          </div>
                                          <div>--- or ----</div>
                                          <div className="gallery">
                                                <span style={{marginRight:"7px", fill:"#FFF"}}>
      
      <svg version="1.1" id="Capa_1"  x="0px" y="0px"
       viewBox="0 0 430.23 430.23" style={{enableBackground:"new 0 0 430.23 430.23", width:"20px",height:"20px"}} >
<g>
      <g>
            <g>
                  <path d="M217.875,159.668c-24.237,0-43.886,19.648-43.886,43.886c0,24.237,19.648,43.886,43.886,43.886
                        c24.237,0,43.886-19.648,43.886-43.886C261.761,179.316,242.113,159.668,217.875,159.668z M217.875,226.541
                        c-12.696,0-22.988-10.292-22.988-22.988c0-12.696,10.292-22.988,22.988-22.988h0c12.696,0,22.988,10.292,22.988,22.988
                        C240.863,216.249,230.571,226.541,217.875,226.541z"/>
                  <path d="M392.896,59.357L107.639,26.966c-11.071-1.574-22.288,1.658-30.824,8.882c-8.535,6.618-14.006,16.428-15.151,27.167
                        l-5.224,42.841H40.243c-22.988,0-40.229,20.375-40.229,43.363V362.9c-0.579,21.921,16.722,40.162,38.644,40.741
                        c0.528,0.014,1.057,0.017,1.585,0.01h286.824c22.988,0,43.886-17.763,43.886-40.751v-8.359
                        c7.127-1.377,13.888-4.224,19.853-8.359c8.465-7.127,13.885-17.22,15.151-28.212l24.033-212.114
                        C432.44,82.815,415.905,62.088,392.896,59.357z M350.055,362.9c0,11.494-11.494,19.853-22.988,19.853H40.243
                        c-10.383,0.305-19.047-7.865-19.352-18.248c-0.016-0.535-0.009-1.07,0.021-1.605v-38.661l80.98-59.559
                        c9.728-7.469,23.43-6.805,32.392,1.567l56.947,50.155c8.648,7.261,19.534,11.32,30.825,11.494
                        c8.828,0.108,17.511-2.243,25.078-6.792l102.922-59.559V362.9z M350.055,236.99l-113.894,66.351
                        c-9.78,5.794-22.159,4.745-30.825-2.612l-57.469-50.678c-16.471-14.153-40.545-15.021-57.992-2.09l-68.963,50.155V149.219
                        c0-11.494,7.837-22.465,19.331-22.465h286.824c12.28,0.509,22.197,10.201,22.988,22.465V236.99z M409.112,103.035
                        c-0.007,0.069-0.013,0.139-0.021,0.208l-24.555,212.114c0.042,5.5-2.466,10.709-6.792,14.106c-2.09,2.09-6.792,3.135-6.792,4.18
                        V149.219c-0.825-23.801-20.077-42.824-43.886-43.363H77.337l4.702-40.751c1.02-5.277,3.779-10.059,7.837-13.584
                        c4.582-3.168,10.122-4.645,15.674-4.18l284.735,32.914C401.773,81.346,410.203,91.545,409.112,103.035z"/>
            </g>
      </g></g>
</svg>


                                                </span>
                                                <span>Select from Gallery</span>

                                          </div>
                                                            

                                    </div>
                               </div> )





                        }
            }


        return (           

        <div className="main">            
            
            <Header/>
            
            {
                 
            }

            <div className="container">
            	<SideBar item={1}/>	
            	
                  <div className="content">
            	     <div className="title">Create your first transfer agreement</div>
                       <div className="list-wrapper">
                              <div className="content-title"> <span>Transfer Agreement #{obj.id} </span></div>
                              
                               <div className="list-table">
                                    <div className="f-f1">
                                          <div className="f1">
                                                      <div className="f1-t1">Buyer's Email</div>
                                                      <div>{obj.email}</div>
                                          </div>
                                          <div className="f1"> 
                                                      <div className="f1-t1">Exporting To</div>
                                                      <div>{obj.exportingTo}</div>
                                          </div>

                                          <div className="f1">      
                                                      <div className="f1-t1">Invoice Amount</div>                                    
                                                      <div>{obj.amount}</div>
                                          </div>
                                          </div>
                                          <div className="f-f1 f-f2">
                                          <div className="f1">
                                                <div className="f1-t2">Buyer's Details</div>
                                                <div>Edit</div>

                                          </div>
                                          <div className="f1">
                                                <div className="f1-t2">Company </div>
                                                <div>{obj.company}</div>
                                          </div>
                                          <div className="f1">   
                                                <div className="f1-t2">Contact Person </div>
                                                <div>{obj.contactPerson}</div>
                                          </div>
                                    </div>
                              </div>
                               


                             <div>
                                         <div  className="product"> 
                                                <span className="s1">Product Details</span>
                                                <span className="s2">Placeholder for subtitle</span>
                                          </div>
                                         <div ref={this.myProduct} className="upload">
                                               <div className="upload-title"><span> Upload your proforma Invoice </span></div>
                                              {
                                                onDeviceBased()
                                              }
                                               <div className="upload-another">
                                                      <span className="plus">+</span>
                                                      <span style={{marginLeft:"2%",marginBottom:"2%"}}>Upload another document </span>
                                               </div>
                                          </div>
                                                 <button  className="n-but" onClick={this.onNext.bind(this)}style={{float:"right"},{opacity:value}}>Next</button>
                                  </div> 
                                   <div className="wrap-end">
                                   <div ref={this.myShipping} className="end">
                                          <span>Shipping Information</span>
                                          <button className="shipping-button" style={{display:"none"}}>DONE</button>
                                   </div>
                                   <div className="end"><span>Release Condition</span></div>
                                   <div className="end"><span>Payment Details</span></div>
                                   </div>
                                   
                       </div>
                 
                  </div>
            </div>
 	  </div>


        );}
}

