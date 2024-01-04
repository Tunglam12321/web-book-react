import React from 'react';


class MyComponent1 extends React.Component{

    render(){       
        return(
            <>  
            <div>
            {this.props.name.arrayJob.map(
                    (item,index)=>{
                        return(
                            <div key={item.id}>Child Component name: {item.name}-{item.salary}</div>
                        )
                        }
            )}
            </div>
                
                
            </>
        )
    }
}
export default MyComponent1;