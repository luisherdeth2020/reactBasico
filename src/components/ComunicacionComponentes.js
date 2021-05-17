import React, { Component } from 'react';

export default class Padre extends Component {
	state = {
		contador: 0,
	};

	// creamos método
	incrementarContador = (e) => {
		this.setState({ contador: this.state.contador + 1 });
	};
	render() {
		return (
			<>
				<h2>Comuncación entre Componentes</h2>
                <p>Contandor <b>{this.state.contador}</b></p>
				<Hijo mensaje="Mensaje para el hijo 1" />
				<Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2" />
			</>
		);
	}
}

function Hijo(props) {
	return (
		<>
			<h3>{props.mensaje}</h3>
			<button onClick={props.incrementarContador}>+</button>
		</>
	);
}
