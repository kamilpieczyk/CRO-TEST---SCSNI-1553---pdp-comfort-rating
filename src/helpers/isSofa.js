/**
 * @returns {boolean}
 */
export default () => {
  let isSofa = false

  const container = document.querySelector('.js-product-detail')

  if (container) {
    const gaData = container.getAttribute('data-product-ga-data')
    const data = gaData ? JSON.parse(gaData) : {}

    if (data.category.toLowerCase().includes('sofa')) {
      isSofa = true
    }
  }

  return isSofa
}