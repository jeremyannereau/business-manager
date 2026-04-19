/**
 * env.js — gestion de l'environnement web vs natif (Capacitor)
 */

export const isNative = typeof window !== 'undefined' && !!window.Capacitor?.isNativePlatform?.()

// URL de base de l'API
// En web  : '' → appels relatifs au domaine courant
// En natif : IP/domaine du serveur Symfony
export const API_BASE = isNative
  ? (process.env.SYMFONY_API_URL || 'http://192.168.1.126:8000')
  : ''

/**
 * Wrapper fetch qui :
 * - Préfixe l'URL en mode natif
 * - Injecte le token JWT dans le header Authorization
 */
export function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`

  const token = localStorage.getItem('jwt_token')
  if (token) {
    options.headers = {
      'Content-Type': 'application/json',
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    }
  }

  return fetch(url, options)
}
