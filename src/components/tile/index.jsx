import './style.scss'

/**
 * @param {{
 *  title: string;
 *  subTitle: string;
 *  imageUrl: string;
 * }} props
 */
export default ({ title, subTitle, imageUrl }) => {
  return (
    <div className="dy-pdp-comfort-rating-tile">
      <img
        src={ imageUrl }
        alt={ 'tile-icon-'+title }
      />
      <div className="dy-pdp-comfort-rating-tile---text-content">
        <h4>{ title }</h4>
        <p>{ subTitle }</p>
      </div>
    </div>
  )
}