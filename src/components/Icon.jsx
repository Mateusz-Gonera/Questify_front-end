import Icons from '../Images/icons.svg'

const Icon = ({ className, name, color, size }) => (
  <svg className={className} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
)


export default Icon