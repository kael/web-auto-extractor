const EXCLUDED_REL = ['dns-prefetch', 'import', 'modulepreload', 'preconnect', 'prefetch', 'preload', 'prerender', 'stylesheet']

export default ($) => {
  let linktagsData = {}
  $('link').each((index, elem) => {
    const nameKey = Object.keys(elem.attribs).find((attr) => ['rel'].indexOf(attr) !== -1)
    const name = elem.attribs[nameKey]
    if (!EXCLUDED_REL.includes(name)) {
      if (!(nameKey in linktagsData)) linktagsData[nameKey] = {}
      if (!(name in linktagsData[nameKey])) linktagsData[nameKey][name] = []
      linktagsData[nameKey][name].push({
        title: elem.attribs.title,
        href: elem.attribs.href,
        type: elem.attribs.type,
        hreflang: elem.attribs.hreflang
      })
    }
  })
  return linktagsData
}
