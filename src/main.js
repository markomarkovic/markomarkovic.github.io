function old(y = 1980, m = 6, d = 17) {
  const bday = new Date(y, m - 1, d)
  const now = new Date()
  let years = now.getFullYear() - bday.getFullYear()
  let months = now.getMonth() - bday.getMonth()
  let days = now.getDate() - bday.getDate()
  if (months < 0) {
    years--
    months += 12
  }
  if (days < 0) {
    months = Math.max(0, months - 1)
    days += 30
  }
  let msg = `${years} years`
  if (months !== 0) {
    msg += `, ${months} months`
  }
  if (days !== 0) {
    msg += `, ${days} days`
  }
  msg += ' old'
  return msg
}

document.getElementById('age').textContent = old()

function getSystemTheme() {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getEffectiveTheme() {
  return localStorage.getItem('theme') || getSystemTheme()
}

function setSvgHidden(svg, isHidden) {
  if (isHidden) {
    svg.setAttribute('hidden', '')
  } else {
    svg.removeAttribute('hidden')
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  setSvgHidden(document.getElementById('icon-sun'), theme !== 'dark')
  setSvgHidden(document.getElementById('icon-moon'), theme === 'dark')
}

applyTheme(getEffectiveTheme())

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', next)
  applyTheme(next)
})

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!localStorage.getItem('theme')) applyTheme(getSystemTheme())
})
