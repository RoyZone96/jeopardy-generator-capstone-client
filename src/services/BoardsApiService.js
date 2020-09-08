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
  getBoard(boards_id) {
    return fetch(`${config.API_ENDPOINT}/boards/${boards_id}`, {
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
  getBoardsQuestions(boards_id) {
    return fetch(`${config.API_ENDPOINT}/boards/${boards_id}/questions`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postQuestions(boards_id, text) {
    return fetch(`${config.API_ENDPOINT}/questions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        boards_id: boards_id,
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

