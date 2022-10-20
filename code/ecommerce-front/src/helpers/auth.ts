import { Jwt } from "../models/auth"

export function isAuth (): Jwt | boolean {
  const jwt = localStorage.getItem('jwt')
  if (jwt) return JSON.parse(jwt)
  return false
}
