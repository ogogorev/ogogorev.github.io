import JSX from '../../helpers/jsx'

import './toggle-menu-button.css'

/**
 * 
 * TODO:
 * - Remove internal state (opened variable)
 * - Get state as prop
 * - listen to the state changes and run animations depending on them
 * 
 */

export default function ToggleMenuButton({ onToggle }) {
  const animateAttrs = {
    attributeName: "d",
    fill: "freeze",
    repeatCount: "1",
    dur: "150ms",
    begin: "indefinite"
  }

  const openAnimation = <animate to="M5,4 L50,16 L95,4;" {...animateAttrs} />
  const closeAnimation = <animate to="M5,16 L50,4 L95,16;" {...animateAttrs} />

  const svg = <svg width="100" height="20" viewBox="0 0 100 20">
    <path stroke-width="4" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round"
      d="M5,16 L50,4 L95,16">
      {openAnimation}
      {closeAnimation}
    </path>
  </svg>

  let opened = false

  const onButtonClick = () => {
    if (opened) { closeAnimation.beginElement() }
    else { openAnimation.beginElement() }
    opened = !opened
    onToggle(opened)
  }

  return <button className="toggle-menu-button" onclick={onButtonClick}>{svg}</button>
}