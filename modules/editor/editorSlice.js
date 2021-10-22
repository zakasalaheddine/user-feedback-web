import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [
    {
      question: 'How was your visit ?',
      type: 'stars'
    }
  ]
}

export const EditorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    addNewQuestion: (state, { payload }) => {
      state.questions = [...state.questions, payload]
    }
  }
})

export const { addNewQuestion } = EditorSlice.actions

export default EditorSlice.reducer
