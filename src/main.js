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
