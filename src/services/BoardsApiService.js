import config from '../config'
import TokenService from './TokenService'
const BoardsApiService = {
  getBoards() {
    return fetch(`${config.API_ENDPOINT}/boards`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBoard(boardsId) {
    return fetch(`${config.API_ENDPOINT}/boards/${boardsId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBoardsQuestions(boardsId) {
    return fetch(`${config.API_ENDPOINT}/boards/${boardsId}/questions/${questionsId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postQuestions(boardsId, text) {
    return fetch(`${config.API_ENDPOINT}/questions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        boards_id: boardsId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default BoardsApiService

