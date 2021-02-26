import React from 'react';
class Data extends  React.Component{

    // constructor(props){
    //     super(props)

    // }
    render(){
        return(
            <div>
                <p>
                Name  : {this.props.firstName} {this.props.lastName} <br></br>
                address:{this.props.address}<br></br>
                gender:{this.props.gender}<br></br>
                isApplicable:{this.props.applicable}<br></br>

                </p>
            
            
            </div>
            
        
        )
    }
}
export default Data;