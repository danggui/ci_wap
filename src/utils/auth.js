import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  //return Cookies.get(TokenKey)
  return "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJlbWFpbFwiOlwiMUAxLmNvbVwiLFwiaWROdW1iZXJcIjpcIjExMTExMTExMTExMTExMTExMVwiLFwibG9jYWxlXCI6XCJ6aF9DTlwiLFwicGVyc29uSWRcIjpcIjVjMjQ4YmVlMzU0YjAxM2IzNDk1MDVhZFwiLFwicGhvbmVcIjpcIjExMTExMTExMTExXCIsXCJ1c2VySWRcIjpcIjMzYmI3OGUwLTA5YmEtMTFlOS1hYjY1LTAwMGMyOWNhYTRmYVwiLFwidXNlcm5hbWVcIjpcImFkbWluXCJ9IiwiYXV0aCI6IiIsImV4cCI6MTU1MDk3MjAyNn0.Irvr5NClFyXnTymvBsqZMjd40tuyzUx8Z7j6eLmTeSsK_DUTzPm6aMb7O8sKs6_CRSy5-h6Lm62608RVk4uAGA"
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
