import React from 'react'

export default React.createContext({
  board: [],
  category: "",
  questions: [],
  addBoard: () => {},
  addQuestion: () => {},
  editBoard: () => {},
  deleteBoard: () => {},
  shareBoard: () => {},
  setUser: () => {}
})