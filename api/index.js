import Prismic from 'prismic-javascript'
import { apiEndpoint } from '../prismic-config.json'

const getPageAPI = async slug => {
  try {
    const API = await Prismic.api(apiEndpoint)
    const res = await API.query(
      Prismic.Predicates.at('my.page.uid', slug)
    )
    return res.results[0];
  } catch (error) {
    console.error(error)
    return error
  }
}

const getNavbarAPI = async() => {
  try {
    const API = await Prismic.api(apiEndpoint)
    const res = await API.query(
      Prismic.Predicates.at('document.type', 'navigation')
    )
    return res.results[0]
  } catch (error) {
    console.error(error)
    return error
  }
}

const getHomepageAPI = async() => {
  try {
    const API = await Prismic.api(apiEndpoint)
    const res = await API.query(
      Prismic.Predicates.at('document.type', 'homepage')
    )
    return res.results[0]
  } catch (error) {
    console.error(error)
    return error
  }
}

export {
  getNavbarAPI,
  getHomepageAPI,
  getPageAPI
}
