import Question from "./Question";
import { selectAllQuestions } from "./questionsSlice";

export const QuestionsList = () => {
  const questions = useSelector(selectAllQuestions);
  return (
    <ol className="question-list">
      {questions.map((question) => (
        <li key={question.id}>
          <Question id={question.id} />
        </li>
      ))}
    </ol>
  );
};

export default QuestionsList;
