import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  //return Cookies.get(TokenKey)
  return "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJlbWFpbFwiOlwiMUAxLmNvbVwiLFwiaWROdW1iZXJcIjpcIjExMTExMTExMTExMTExMTExMVwiLFwibG9jYWxlXCI6XCJ6aF9DTlwiLFwicGVyc29uSWRcIjpcIjVjMjQ4YmVlMzU0YjAxM2IzNDk1MDVhZFwiLFwicGhvbmVcIjpcIjExMTExMTExMTExXCIsXCJ1c2VySWRcIjpcIjMzYmI3OGUwLTA5YmEtMTFlOS1hYjY1LTAwMGMyOWNhYTRmYVwiLFwidXNlcm5hbWVcIjpcImFkbWluXCJ9IiwiYXV0aCI6IiIsImV4cCI6MTU1MzY1MDY3M30.Poy-Vouv5DNTexadxWwZ7c8cZFCcuUyZ4xul415HDEAqeYas_GLXPPu35ONA9JiU8LcOfDwsfVuiPaFYHvz8ZA"
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export function setPerson(id) {
  return Cookies.set(PersonId, id)
}

export function getPerson() {
  return 3
}

