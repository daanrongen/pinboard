import database from './database.json'

export function getTags() {
  const tagLists = database.map((x) => x.tags)
  const tags = [].concat(...tagLists)
  const uniqueTags = [...new Set(tags)]

  return uniqueTags
}

export function getColor(tag) {
  const uniqueTags = getTags()
  const index = uniqueTags.findIndex((x) => x === tag)

  //   https://codepen.io/BangEqual/pen/VLNowO
  const colors = [
    '#1700ff',
    '#2e00ff',
    '#4600ff',
    '#5d00ff',
    '#7400ff',
    '#8b00ff',
    '#a200ff',
    '#b900ff',
    '#d100ff',
    '#e800ff',
    '#e817e8',
    '#d12ed1',
    '#b946b9',
    '#a25da2',
    '#8b748b',
    '#748b74',
    '#5da25d',
    '#46b946',
    '#2ed12e',
    '#17e817',
  ]

  return colors[index]
}
