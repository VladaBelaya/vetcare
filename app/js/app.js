import {cardItem} from '../data/cardItem.js'

document.addEventListener('DOMContentLoaded', () => {

  const anchorsLinks = document.querySelectorAll('a[href^="#"]')
	const cardsList = document.querySelector('.cards')
	
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


})

