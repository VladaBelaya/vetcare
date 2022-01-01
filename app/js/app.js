import {cardItem} from '../data/cardItem.js'

const preloader = document.querySelector('.loader');

window.addEventListener('load', () => {
	document.body.style.overflow = 'hidden'
	setTimeout(function() {
				preloader.classList.add('preloader-hidden');
				document.body.style.overflow = 'visible'
	}, 1500);
})


document.addEventListener('DOMContentLoaded', () => {
	
  const anchorsLinks = document.querySelectorAll('a[href^="#"]')
	const cardsList = document.querySelector('.cards')
	const btnUp = document.querySelector('.btn_up')
	let scrolled
	let timer
	initTemplate ()
	function initTemplate () {
		cardItem.forEach((card, idx) => cardsList.innerHTML += createTemplate(card, idx))
	}
	
	function createTemplate (entity, idx) {
		return	`	<li class="card">
									<div class="card__icon card__icon-${idx + 1}">
											${entity.icon}
									</div>
									<div class="card__heading">${entity.heading}</div>
									<p class="card__descr">${entity.descr}</p>
							</li>
						`										
	}
	

  for (const anchorLink of anchorsLinks) {
    anchorLink.addEventListener('click', (event) => {
      event.preventDefault()
      const currentLink = anchorLink.getAttribute('href').substr(1)
      console.log(currentLink)
      const scrollToElement = document.getElementById(currentLink)
      scrollToElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

	window.addEventListener('scroll', () => {
		if (window.scrollY > 1300) {
			btnUp.classList.add('btn_up-active')
		} else
		btnUp.classList.remove('btn_up-active')
	})

	btnUp.addEventListener('click', () => {
		scrolled = window.pageYOffset
		scrollToUp()
	})


	function scrollToUp () {
		if(scrolled > 0) {
			window.scrollTo(0, scrolled)
			scrolled = scrolled - 100
			timer = setTimeout(scrollToUp, 20)
		} else {
			clearTimeout()
			window.scrollTo(0, 0)
		}
	}

})

