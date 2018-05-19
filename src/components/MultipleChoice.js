import React from 'react';
import '../css/App.css';

class MultipleChoice extends React.Component{
    constructor(){
        super();
        this.state = {
            isAnswered: false, //initially when answer choices are rendered for first time, it has not been answered for first time
        }
        this.correctAnswer = this.correctAnswer.bind(this);
    }

    correctAnswer(e){ //grabbing whatever user clicks on the answer
        let { questionAnswered } = this.props;
        this.setState({
            isAnswered: true,
        })
        let {answer, score, scoring, showButton, color, showCorrectAnswer} = this.props;
        let elem = e.currentTarget; //grabs whatever user clicks on one of the radio buttons
        console.log(elem.childNodes[0])
        let user_answer = elem.childNodes[0].value;
        if(user_answer === answer){ //if answer is right
            elem.childNodes[0].parentNode.classList.add('green');               
            color = true;
            scoring();
        }
        else { //if answer is wrong                  
            elem.childNodes[0].parentNode.classList.add('red');   
            var outer = elem.childNodes[0].parentNode.parentNode.childNodes;
            for (var i = 0; i < outer.length; i++) { //find the correct answer and display it
                var inner = outer[i].innerText;
                if (inner === answer) {
                    outer[i].classList.add('green'); 
                }
            }
        }
        showButton(); //handleShowNextButton
        
    }


                        
    render(){   
        const { choice, index, questionAnswered, color, current_question } = this.props;
                    
        return (
            <li className="answerChoice" key={current_question} onClick = {this.correctAnswer}>
            <input
              type="radio"
              className="radioAnswerButton"
              name={current_question}
              value={choice}
            />
            <label className="radioAnswerLabel">
              {choice}
            </label>
          </li>
    

        )
    }
}

  
export default MultipleChoice;