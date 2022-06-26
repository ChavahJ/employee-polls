import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    receiveQuestions(state, action) {
      return {
        ...state,
        ...action.questions,
      };
    },
    addQuestion(state, action) {
      return {
        ...state,
        [action.question.id]: action.question,
      };
    },
  },
});

export const { receiveQuestions, addQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;

export const selectAllQuestions = (state) => state.questions;

export const selectQuestionById = (state, qid) =>
  state.questions.find((question) => question.id === qid);
