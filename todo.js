let count = 0

console.log('Amount of selected todos: ' + count)

newElement = () => {
  const inputValue = document.getElementById('my-text-field').value
  if (inputValue === '') {
    alert("Don't submit an empty task!")
  } else {
    const li = document.createElement('li')
    li.className = 'mdc-list-item'
    li.innerHTML = '<span class="mdc-list-item__graphic">' +
      '<div class="mdc-checkbox">' +
      '<input type="checkbox" class="mdc-checkbox__native-control" />' +
      '<div class="mdc-checkbox__background">' +
      '<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">' +
      '<path class="mdc-checkbox__checkmark-path" fill="none"' +
      'd="M1.73,12.91 8.1,19.28 22.79,4.59" />' +
      '</svg>' +
      '<div class="mdc-checkbox__mixedmark"></div>' +
      '</div>' +
      '</div>' +
      '</span> ' +
      '<label class="mdc-list-item__text">' + inputValue + '</label>' +
      '<span class="close-button" onclick="return this.parentNode.remove()"><i class="material-icons">close</i></span>'
    const ul = document.getElementById('todolist')
    ul.append(li)
  }
}

document.querySelector('.mdc-list').onclick = function (ev) {
  if (ev.target.checked && ev.target.closest('input')) {
    // ev.target.parentNode.parentNode.parentNode.style.backgroundColor = '#e9e9e9'
    count += 1
    console.log('Amount of selected todos: ' + count)
  } else if (!ev.target.checked && ev.target.closest('input')) {
    count -= 1
    console.log('Amount of selected todos: ' + count)
  }
}

const observer = new MutationObserver(function (mutations) {
  try {
    if (mutations[0].removedNodes[0].children[0].children[0].children[0].checked) {
      count -= 1
      console.log('Amount of selected todos: ' + count)
    }
  }
  catch {
  }
})

const config = { childList: true }

observer.observe(document.getElementById('todolist'), config)
