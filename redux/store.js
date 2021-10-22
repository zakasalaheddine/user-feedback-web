import { configureStore } from '@reduxjs/toolkit'
import EditorSlice from 'modules/editor/editorSlice'

export default configureStore({
  reducer: {
    editor: EditorSlice
  }
})
