const BREAKPOINTS = {
  PHONE: 600,
  TABLET_PORTRAIT: 900,
  TABLET_LANDSCAPE: 1200,
  DESKTOP: 1800,
  LARGE_DESKTOP: Number.POSITIVE_INFINITY
}

export enum Device {
  PHONE = 'PHONE',
  TABLET_PORTRAIT = 'TABLET_PORTRAIT',
  TABLET_LANDSCAPE = 'TABLET_LANDSCAPE',
  DESKTOP = 'DESKTOP',
  LARGE_DESKTOP = 'LARGE_DESKTOP'
}

export const ScreenService = (() => {
  function getScreenWidth() {
    return window.innerWidth
  }

  function isDeviceUp(device: Device) {
    return (BREAKPOINTS[device] <= window.innerWidth)
  }

  function isDeviceDown(device: Device) {
    return (BREAKPOINTS[device] > window.innerWidth)
  }

  return {
    getScreenWidth,
    isDeviceUp,
    isDeviceDown
  }
})()