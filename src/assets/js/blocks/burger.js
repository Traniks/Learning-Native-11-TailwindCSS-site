export function burger() {
	const btn = document.querySelector('[data-burger="btn"]')
	const menu = document.querySelector('[data-burger="menu"]')
	const body = document.body

	const burgerOpen = () => {
		btn.classList.toggle('header__burger_active')
		menu.classList.toggle('header__menu_active')
		body.classList.toggle('fixed')
	}

	const burgerClose = () => {
		btn.classList.remove('header__burger_active')
		menu.classList.remove('header__menu_active')
		body.classList.remove('fixed')
	}

	btn.addEventListener('click', burgerOpen)
	menu.addEventListener('click', event => {
		if (event.target && event.target.tagName === 'A') {
			burgerClose()
		}
	})
}
