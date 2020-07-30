import React from 'react'

export default React.createContext({
  board: [],
  questions: [],
  addBoard: () => {},
  deleteBoard: () => {},
  shareBoard: () => {}
})