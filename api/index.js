import Prismic from 'prismic-javascript'

const endPoint = process.env.PRISMIC

const getNavbarAPI = async() => {
  try {
    const API = await Prismic.api(endPoint)
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
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('document.type', 'homepage')
    )
    return res.results[0]
  } catch (error) {
    console.error(error)
    return error
  }
}

const getPageAPI = async uid => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('my.page.uid', uid)
    )
    return res.results[0];
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
