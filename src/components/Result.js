import React from 'react';
import '../css/App.css';
class Result extends React.Component{
  
    render(){
        const { length, score } = this.props;
        let percentage = (score/length)*100;
        let message = "";
        if(percentage >= 90){
            message="Yay! Good Job!"
        }else if(percentage < 90 && percentage > 70){
            message="Nice!"
        }else if(percentage < 70){
            message = "Oh no!"
        }
        return (
           <div className="Result">
                <h1 className="percentage">{score} / {length}</h1>
                <h1 className="message">{message}</h1>
           </div> 

        )
    }
}

  
export default Result;