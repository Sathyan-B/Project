
let names = ['John','Mark','Smith','Bill','Rocky','Jennifer','Carlonie','Ariana','Roy'];
let country = ['Singapore','China','Russia','India','London','Mexico','Paris','Pakistan','Africa']

module.exports = () => {
    
    let data = {
        transfer_agreement:[],        
    };
    
    for(let i =0;i<10;++i){
        let index = (Math.random()*100 | 0) % names.length;        
        data.transfer_agreement.push(
           {
                id : index,
                name:names[index],
                email:names[index]+'@email.com',
                exporting:country[index],
                company : names[index]+' Corp Ltd',
                amount:(Math.random()*100000 | 0),
            },
            
        );
    }
    return data;    
}