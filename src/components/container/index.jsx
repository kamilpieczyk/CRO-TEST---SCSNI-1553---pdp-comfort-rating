import './style.scss'
import { Show, createEffect, createSignal, onMount } from 'solid-js'

import getRange from '@helpers/getRange'
import getComfortRating from '@helpers/getComfortRating'
import Tile from '@components/tile'

/**
 * @param {{ mobile: boolean }} props
 */
export default ({ mobile }) => {
  const [ show, setShow ] = createSignal(false)
  const [ comfortRating, setComfortRating ] = createSignal('')

  const images = {
    soft: 'https://cdn-eu.dynamicyield.com/api/9878419/images/1dc1c7913cd3a__screenshot_2023-06-12_at_12_09_21.png',
    medium: 'https://cdn-eu.dynamicyield.com/api/9878419/images/1dc1c7913cd3a__screenshot_2023-06-12_at_12_09_21.png',
    firm: 'https://cdn-eu.dynamicyield.com/api/9878419/images/1dc1c7913cd3a__screenshot_2023-06-12_at_12_09_21.png'
  }

  const range = getRange()
  const rating = range ? getComfortRating( range ) : null

  if ( rating ) {
    setShow(true)
    setComfortRating(rating)
  }

  return (
    <Show when={ show() }>
      <div className={`dy-pdp-comfort-rating-container ${mobile ? 'hide-desktop' : 'hide-mobile'}`}>
        <Tile
          title={ comfortRating() }
          subTitle='comfort rating'
          imageUrl={ images[comfortRating()] }
        />
      </div>
    </Show>
  )
}