import  { useState } from 'react';
import questionsData from './questions.json';

function Quiz() {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleSubjectSelect = (subject: any) => {
        setSelectedSubject(subject);
        setCurrentQuestionIndex(0);
        setScore(0);
    };

    const handleAnswerSelect = (selectedAnswer : any) => {
        const currentQuestion = questionsData.topics[selectedSubject].questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correct_answer) {
            setScore(score + 1);
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleRestart = () => {
        setSelectedSubject(null);
        setCurrentQuestionIndex(0);
        setScore(0);
    };

    const renderSubjectSelection = () => {
        return (
            <div>
                <h2>Select a Subject:</h2>
                {Object.keys(questionsData.topics).map((subject) => (
                    <button className='btn btn-wide m-2' key={subject} onClick={() => handleSubjectSelect(subject)}>
                        {subject}
                    </button>
                ))}
            </div>
        );
    };

    const renderQuestion = () => {
        const currentQuestion = questionsData.topics[selectedSubject].questions[currentQuestionIndex];

        return (
            <div>
                <h2>{currentQuestion.question}</h2>
                <ul>
                    {Object.entries(currentQuestion.answers).map(([key, value]) => (
                        <li className='p-2' key={key}>
                            <button className='btn btn-wide btn-neutral' onClick={() => handleAnswerSelect(key)}>{value}</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderResults = () => {
        return (
            <div>
                <h2>Quiz Completed!</h2>
                <p>Your score: {score} out of {questionsData.topics[selectedSubject].questions.length}</p>
                <button onClick={handleRestart}>Restart</button>
            </div>
        );
    };

    return (
        <div>
            <h1>Quiz Game</h1>
            {selectedSubject ? (
                currentQuestionIndex < questionsData.topics[selectedSubject].questions.length ? (
                    renderQuestion()
                ) : (
                    renderResults()
                )
            ) : (
                renderSubjectSelection()
            )}
        </div>
    );
}

export default Quiz;
