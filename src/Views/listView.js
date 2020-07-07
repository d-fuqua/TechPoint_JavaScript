import {elements} from './base'
// import id_page from '../Models/Server/id.js'
// import server from '../Models/Server/server.js'

export const renderItem = photo => {
	const markup = `
				<li class="shopping__item">
                    <img src="${photo}" class="recipe__img">
                </li>	
	`
	elements.shopping.insertAdjacentHTML('beforeend', markup)
}

export const clearViews = () => {
	elements.shopping.innerHTML = '';
}
