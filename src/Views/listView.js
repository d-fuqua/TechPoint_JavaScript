import {elements} from './base'
// import id_page from '../Models/Server/id.js'
// import server from '../Models/Server/server.js'

export const renderItem = photo => {
	const markup = `
				<li class="photo__item">
                    <img src="${photo}" class="restaurant__img">
                </li>	
	`
	elements.photo.insertAdjacentHTML('beforeend', markup)
}

export const clearCounter = () => {
	// elements.counter.innerHTML = '<button id = "counterButton" onclick="myFunction()" class="heading-2">Show</button>';
}

export const clearViews = () => {
	elements.photo.innerHTML = '';
}
