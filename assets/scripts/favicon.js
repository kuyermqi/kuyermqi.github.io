const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
handleDarkmode(darkModeMediaQuery)
function handleDarkmode(e) {
  const darkModeOn = e.matches
  const favicon = document.querySelector('link[rel="icon"]')
  if (!favicon) {
    return
  }
  if (darkModeOn) {
    favicon.href = '/assets/img/favicon_dark.png'
  } else {
    favicon.href = '/assets/img/favicon.png'
  }
}
darkModeMediaQuery.addEventListener('change', handleDarkmode)
