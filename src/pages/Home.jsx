import { useEffect, useState } from "react"
import dataQuestion from '../questions.js'

import AnimatedPage from "../components/AnimatedPage"
import Question from "../components/Question"
import LiteratureSlider from "../components/LiteratureSlider"
import Confetti from 'react-confetti'

export default function Home() {
    // Variables
    const [newGame, setNewGame] = useState(false)
    const [playAgain, setPlayAgain] = useState(false)

    const [questions, setQuestions] = useState([])
    const [correctCount, setCorrectCount] = useState(0)

    // Style
    const correctStyle = { color: (correctCount < 4) ? '#ff0000' : '#00ae24' }
    useEffect(() => {
        setQuestions(() => {
            let newArray = []

            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.ceil(Math.random() * 76);

                newArray.push({
                    id: dataQuestion[randomNumber].id,
                    question: dataQuestion[randomNumber].question,
                    correct_answer: dataQuestion[randomNumber].correct_answer,
                    answers: [
                        ...dataQuestion[randomNumber].answers,
                    ].sort(() => Math.random() - 0.5),
                    select_answer: '',
                    isCorrect: false
                })
            }

            return newArray
        })
    }, [newGame])

    // Functions
    function selectAnswer(e, c_answer, id) {
        const { value } = e.target

        setQuestions(oldQuestion => oldQuestion.map(question => {
            return question.id === id ?
                { ...question, select_answer: value, isCorrect: value === c_answer ? true : false } :
                question
        }))
    }

    function checkAnswers() {
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].select_answer != "") {
                if (questions[i].isCorrect) {
                    setCorrectCount(prevCount => prevCount + 1)
                }
            } else {
                setCorrectCount(0)
                alert('Answer all questions!')
                return
            }
        }
        setPlayAgain(true)
    }

    function handlePlayAgain() {
        setQuestions([])
        setPlayAgain(false)
        setNewGame(prevGame => !prevGame)
        setCorrectCount(0)
        window.scrollTo(0, 0)
    }

    const questionsElement = questions.map(question => ([<Question key={question.id} data={question} handleChange={selectAnswer} playAgain={playAgain} />]))

    return (
        <AnimatedPage>
            <div className="container text-center my-8">
                {questionsElement.length != 0 ? questionsElement : <div className="lds-ripple"><div></div><div></div></div>}

                {
                    !playAgain
                        ?
                        <div className="checkAnswers">
                            {questionsElement.length != 0 && <button className="btn-quiz" onClick={checkAnswers}>Check Answers</button>}
                        </div>
                        :
                        <div className="playAgainBtnDiv">
                            {correctCount > 3 && <Confetti />}
                            <span className="score">You scored <span style={correctStyle}>{correctCount}/5</span> correct answers</span>
                            <button className="btn-quiz" onClick={handlePlayAgain}>Play again</button> <br className="hiddenBr" />
                        </div>
                }

                <LiteratureSlider />
            </div>
        </AnimatedPage>
    )
}