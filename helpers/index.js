function linkResolver(doc) {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/';
}

function hrefResolver(doc) {
  if (doc.type === 'page') {
    return `/page?uid=${doc.uid}`
  }
  return '/'
}

module.exports = {
  linkResolver,
  hrefResolver
};
