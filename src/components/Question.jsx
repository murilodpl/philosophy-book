export default function Question(props) {
    const optionsAnswers = props.data.answers.map(answer =>
        <span key={answer} className={(props.data.correct_answer == answer && props.playAgain) ? 'correctAnswer' : ''}>
            <input type="radio" disabled={props.playAgain ? true : false} checked={props.data.select_answer === answer} onChange={(e) => props.handleChange(e, props.data.correct_answer, props.data.id)} value={answer} id={props.data.id + answer} name={props.data.id} />
            <label htmlFor={props.data.id + answer}>{answer}</label>
        </span>)

    return (
        <div className="questionDiv">
            <h2>{props.data.question}</h2>
            <div className={`questionSelect ${props.playAgain && "playAgain"}`}>
                {optionsAnswers}
            </div>
        </div>
    )
}