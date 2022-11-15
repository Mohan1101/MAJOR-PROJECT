import React,{Component} from "react";





class Timer extends Component{
    state={ 
        date: new Date()
    }

    callMe(){
        setInterval(() => {
          this.setState({date: new Date()});
        },1000);
    }
    
    render(){
        return(

            <>
            {this.state.date.toLocaleTimeString()}{this.callMe()}
            </>
        
        );
    }
    }

export default Timer;