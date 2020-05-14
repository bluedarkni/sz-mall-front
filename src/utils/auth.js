import Cookies from 'js-cookie'
import Settings from '../settings'

const tokenKey = Settings.tokenKey
const userKey = Settings.userKey

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token, rememberMe) {
  if (rememberMe) {
    return Cookies.set(tokenKey, token, { expires: Settings.tokenCookieExpires})
  } else {
    return Cookies.set(tokenKey, token)
  }
}

export function setUser(user) {
  Cookies.set(userKey, user)
}

export function getUser() {
  Cookies.get(userKey)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
