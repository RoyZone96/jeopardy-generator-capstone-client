import React from 'react'

export default React.createContext({
  board: [],
  category: "",
  questions: [],
  addBoard: () => {},
  addQuestion: () => {},
  requestSupport: () => {},
  editBoard: () => {},
  deleteBoard: () => {},
  shareBoard: () => {},
  setUser: () => {}
})