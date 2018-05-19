import React from 'react';
import MultipleChoice from './MultipleChoice';
import '../css/App.css';


class Quiz extends React.Component {
    constructor(){
        super();
    }

    render() {
        const { question, color, questionAnswered, questions_choices, choices, current_question, score, showNextButton, handleShowNextButton, scoring, clickNext } = this.props;
        let showScore = null;
        if(questionAnswered || current_question>1){
            showScore = <div className="score">{score}/{questions_choices.length}</div>
        }
        return (
        <div className="quizSection" >
                <h3>{current_question}) {question}</h3>
                <div className="multipleChoices">
                {choices.map((item, index) => ( //will loop the answer choices using another component
                    <MultipleChoice current_question={current_question} key={index} color={color} index={index} choice={choices[index]} showButton={handleShowNextButton} scoring={this.scoring} {...this.props}/>
                ))}
                </div>
                <div className="next">
                    {showNextButton ? <button onClick={clickNext}>Next</button> : null}
                </div>
                {showScore}
        </div>
        )
    }
}

export default Quiz;




