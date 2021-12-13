'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EXCLUDED_REL = ['dns-prefetch', 'import', 'modulepreload', 'preconnect', 'prefetch', 'preload', 'prerender', 'stylesheet'];

exports.default = function ($) {
  var linktagsData = {};
  $('link').each(function (index, elem) {
    var nameKey = Object.keys(elem.attribs).find(function (attr) {
      return ['rel'].indexOf(attr) !== -1;
    });
    var name = elem.attribs[nameKey];
    if (!EXCLUDED_REL.includes(name)) {
      if (!(nameKey in linktagsData)) linktagsData[nameKey] = {};
      if (!(name in linktagsData[nameKey])) linktagsData[nameKey][name] = [];
      linktagsData[nameKey][name].push({
        title: elem.attribs.title,
        href: elem.attribs.href,
        type: elem.attribs.type,
        hreflang: elem.attribs.hreflang
      });
    }
  });
  return linktagsData;
};