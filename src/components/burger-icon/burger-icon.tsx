import JSX from '../../helpers/jsx'

export default function BurgerIcon({ width, height }) {
  const root = (
    <svg viewBox="0 0 30 25" width={width} height={height}>
      <g fill="#ccc">
        {[0, 10, 20].map(y => <rect width="30" height="5" x="0" y={y} rx="1" ry="1" />)}
      </g>
    </svg>
  )
  return root
}
