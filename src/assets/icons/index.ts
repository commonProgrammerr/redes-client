
import bin from './bin.svg'
import css from './css.svg'
import document from './document.svg'
import folder from './folder.svg'
import html from './html.svg'
import image from './image.svg'
import javascript from './javascript.svg'
import json from './json.svg'
import log from './log.svg'
import pdf from './pdf.svg'
import search from './search.svg'
import url from './url.svg'
import zip from './zip.svg'

const icons = {
  bin,
  css,
  document,
  folder,
  html,
  image,
  javascript,
  json,
  log,
  pdf,
  search,
  url,
  zip,
};

export type Icons = keyof typeof icons

export function getIcon(icon: keyof typeof icons) {
  return icons[icon];
}
