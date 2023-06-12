/**
 * @returns {string} sofaRangeName
 */
export default () => {
  let sofaRangeName = ''

  const rangeBox = document.querySelector('.range-name')

  if (rangeBox) {
    sofaRangeName = rangeBox.textContent.toLowerCase()
  }

  return sofaRangeName
}