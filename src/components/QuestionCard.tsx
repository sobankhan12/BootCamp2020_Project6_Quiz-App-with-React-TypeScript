import React from 'react'
import { RefactorActionInfo } from 'typescript'

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions:number
}

export const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
  return (
    <div>
      <p className="number">Question: {questionNr} / {totalQuestions} </p>
      <p dangerouslySetInnerHTML={{__html: question}} />
    <div>

    </div>
      {answers.map(answer => (
        <div>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html:answer}} />
          </button>
        </div>
      ))}
    </div>
  )
}
