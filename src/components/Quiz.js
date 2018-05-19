import React from 'react';
import quest_choices from '../questionAnswers.json';
import Question from './Question';
import '../css/App.css';
import Result from './Result';
class Quiz extends React.Component{
    constructor() {
        super();

        // getinitialState
        this.state = {
            questions_choices: quest_choices, //grabs json file
            score: 0,
            current_question: 0,
            showNextButton: false,
            questionAnswered: false,
        };

        this.clickNext = this.clickNext.bind(this);
        this.scoring = this.scoring.bind(this);
        this.handleShowNextButton = this.handleShowNextButton.bind(this);
        
    }

    currentQuestion(current_question) {
        this.setState({
            question: quest_choices[current_question].question,
            choices: quest_choices[current_question].choices,
            answer: quest_choices[current_question].answer,
            current_question: this.state.current_question + 1
        })
    }

    UNSAFE_componentWillMount() { //is invoked just before mounting occurs - meaning that it is called before render()
        let {
            current_question
        } = this.state;
        this.currentQuestion(current_question); //will call currentQuestion method first
    }

    clickNext() { //when user clicks on next button
        let {
            current_question,
            score
        } = this.state;
        if (current_question == (this.state.questions_choices.length - 1)) { //when user finishes quiz
            this.setState({
                showScore: 'block', //display when user finishes the quiz
                result: true
            })
        } else {
            this.setState({ //if the user is still answering the quiz
                showNextButton: false,
                questionAnswered: false,
                color: false
            })
            this.currentQuestion(current_question);
        }
    }

    handleShowNextButton() { //when users answer the question and then show next button
        this.setState({
            showNextButton: true,
            questionAnswered: true
        })
    }

    scoring() { //increment current state of score
        this.setState({
            score: this.state.score + 1
        })
    }
         
    render(){
        let show_result = this.state.result;
        return (
           <div className="MainQuiz" id="main">
                {show_result ? <Result length={this.state.questions_choices.length} score={this.state.score}/> : 
                <Question clickNext={this.clickNext} handleShowNextButton={this.handleShowNextButton} scoring={this.scoring} {...this.state} />
                }
           </div> 

        )
    }
}

  
export default Quiz;