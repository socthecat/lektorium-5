debounce = (f, ms) => {
  let isCooldown = false
  return function () {
    if (isCooldown) return
    f.apply(this, arguments)
    isCooldown = true
    setTimeout(() => isCooldown = false, ms)
  }
}

const arr = ['nanachi', 'nezuko', 'inosuke', 'kaban', 'soc']

const input = document.getElementById('debounce-field')

searchThingy = () => {
  const debRes = document.getElementById('deb-res')
  for (let i = 0; i < arr.length; i++) {
    let sub = null
    if (arr.some(substring => {
      sub = substring
      return document.getElementById('debounce-field').value.includes(substring)
    })) {
      debRes.innerHTML = 'Input includes ' + sub
    } else {
      debRes.innerHTML = 'Keep typing'
    }
  }
}

const onChange = debounce(searchThingy, 1000)

input.addEventListener('input', onChange, false)
