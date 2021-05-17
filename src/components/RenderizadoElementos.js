import React, { Component } from 'react';
import data from '../helpers/data.json';

// creando un COMPONENTE
function ElementoLista(props) {
	return (
		<li>
			<a href={props.elemento.web} target="_blank">
				{props.elemento.name}
			</a>
		</li>
	);
}

export default class RenderizadoElementos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
		};
	}
	render() {
		// console.log(data);
		return (
			<div>
				<h2>Renderizado de Elementos</h2>
				<h3>Estaciones del Año</h3>
				<ol>
					{this.state.seasons.map((el, idx) => (
						<li key={idx}>{el}</li>
					))}
				</ol>
				<h3>Frameworks Frontend JavaScript</h3>
				<ul>
					{data.frameworks.map((elemento) => (
						/* Propiedad el = elemento */
						<ElementoLista key={elemento.id} elemento={elemento} />
					))}
				</ul>
			</div>
		);
	}
}
