import JSX from '../../helpers/jsx'

export default function Logo({ size }) {
  const startAnim = (
    <animate
      id="start"
      attributeName="stroke-dasharray"
      fill="freeze"
      dur="150ms"
      begin=""
      to="100 500"
      restart="whenNotActive"
    />
  )

  const colorAnim = (
    <animate
      attributeName="stroke"
      fill="freeze"
      dur="750ms"
      begin=""
      values="#750787; #e40303; #ff8c00; #ffed00; #008026; #004dff; #750787"
      restart="whenNotActive"
    />
  )

  const svg = (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        stroke-width="20"
        stroke="#4B0082"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M50,50 L10,10 L90,10 L10,90 L90,90 L50,50"
        stroke-dasharray="0 500"
        stroke-dashoffset="0"
      >
        {startAnim}

        <animate
          id="end"
          attributeName="stroke-dashoffset"
          dur="600ms"
          begin="start.end"
          to="-386"
          restart="whenNotActive"
        />

        <animate
          attributeName="stroke-dasharray"
          fill="freeze"
          dur="1ms"
          begin="end.end"
          to="0 500"
        />

        {colorAnim}
      </path>
    </svg>
  )

  let isAnimating = false

  svg.addEventListener('mouseenter', () => {
    if (!isAnimating) {
      startAnimation()
    }
  })

  svg.addEventListener('click', () => {
    if (!isAnimating) {
      startAnimation()
    }
  })

  function startAnimation() {
    isAnimating = true
    startAnim.beginElement()
    colorAnim.beginElement()

    setTimeout(() => {
      stopAnimation()
    }, 800)
  }

  function stopAnimation() {
    isAnimating = false
  }

  return svg
}
