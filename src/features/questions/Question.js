// omit imports
import { selectQuestionById } from "./postsSlice";

export const Question = ({ match }) => {
  const { qid } = match.params;

  const post = useSelector((state) => selectQuestionById(state, qid));
  return (
    <div className="question-card">
      <h1>{qid}</h1>
    </div>
  );
};

export default Question;
