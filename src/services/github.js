import axios from 'axios'

const URL_BASE = 'https://api.github.com'

const api = axios.create({
  baseURL: URL_BASE,
})

async function requisitar(caminho) {
  try {
    const resposta = await api.get(caminho)
    return resposta.data
  } catch (erro) {
    if (erro.response?.status === 404) {
      throw new Error('Usuário não encontrado.')
    }
    if (erro.response?.status === 403) {
      throw new Error('Limite de requisições da API do GitHub atingido. Tente novamente em alguns minutos.')
    }
    throw new Error('Não foi possível buscar os dados do GitHub agora.')
  }
}

export function buscarUsuario(nomeUsuario) {
  return requisitar(`/users/${encodeURIComponent(nomeUsuario)}`)
}

export function buscarRepositorios(nomeUsuario) {
  return requisitar(`/users/${encodeURIComponent(nomeUsuario)}/repos?sort=updated&per_page=100`)
}
