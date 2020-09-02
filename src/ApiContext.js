import React from 'react'

export default React.createContext({
  board: [],
  category: "",
  questions: [],
  addBoard: () => {},
  editBoard: () => {},
  deleteBoard: () => {},
  shareBoard: () => {},
  setUser: () => {}
})