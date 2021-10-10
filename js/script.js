const boxes = document.querySelectorAll('.ibg')

for (const box of boxes) {
	const img = box.querySelector('img')
	const src = img.getAttribute('src')
	box.classList.add('ibg')
	box.style.backgroundImage = `url('${src}')`
}

const tabsBlock = document.querySelector('.twitter__tabs')
const tabsElements = tabsBlock.querySelectorAll('.twitter__tab')

tabsBlock.addEventListener('click', event => {
	for (const tab of tabsElements) tab.classList.remove('active')
	event.target.classList.add('active')
})

const inputs = document.querySelectorAll('[data-placeholder]')

for (const input of inputs) {
	input.setAttribute('value', `${input.dataset.placeholder}`)
	input.addEventListener('focus', () => {
		if (input.value !== input.dataset.placeholder) return
		input.value = ''
	})
	input.addEventListener('blur', () => {
		if (input.value !== '') return
		input.value = input.getAttribute('value')
	})
}