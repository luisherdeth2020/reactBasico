import React, { Component } from 'react';
export class EventosES6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0,
		};
		this.sumar = this.sumar.bind(this);
		this.restar = this.restar.bind(this);
	}
	// método de una clase
	sumar() {
		console.log('Sumando');
		// console.log(this);
		this.setState({
			contador: this.state.contador + 1,
		});
	}
	restar() {
		console.log('Restar');
		// console.log(this);
		this.setState({
			contador: this.state.contador - 1,
		});
	}
	render() {
		return (
			<div>
				<h2>Eventos en Componentes de Clase ES6</h2>
				<nav>
					{/* si pones los 2 parentesis, INVICACIÓN INMEDIATA = sumar() */}
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
				<h3>{this.state.contador}</h3>
			</div>
		);
	}
}

// Properties Initializer
export class EventosES7 extends Component {
	state = {
		contador: 0,
	};
	// Arrow Function
	sumar = (e) => {
		console.log('Sumando');
		// console.log(this);
		this.setState({
			contador: this.state.contador + 1,
		});
	};
	restar = (e) => {
		console.log('Restar');
		// console.log(this);
		this.setState({
			contador: this.state.contador - 1,
		});
	};
	render() {
		return (
			<div>
				<h2>Eventos en Componentes de Clase ES7</h2>
				<nav>
					{/* si pones los 2 parentesis, INVICACIÓN INMEDIATA = sumar() */}
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
				<h3>{this.state.contador}</h3>
			</div>
		);
	}
}

// un componente personalizado

// function Boton(props) {
// 	return <button onClick={props.myOnClick}>Botón hecho componente</button>;
// }
// Fin del evento Personalizado

// const Boton = (props) => <button onClick={props.myOnClick}>Botón hecho componente</button>;
const Boton = ({myOnClick}) => <button onClick={myOnClick}>Botón hecho componente</button>;

export class MasSobreEventos extends Component {
	// manejador de eventos
	handleClick = (e, mensaje) => {
		console.log(e.nativeEvent);
		console.log(e.target);
		console.log(e.nativeEvent.target);
		console.log(mensaje);
	};
	render() {
		return (
			<div>
				<h2>Más Sobre Eventos</h2>
				<button onClick={(e) => this.handleClick(e, 'Hola pasando parámetro desde un Evento')}>Saludar</button>
				<Boton onClick={(e) => this.handleClick(e, 'Componente botón')} />
				{/* Evento personalizado */}
				<Boton myOnClick={(e) => this.handleClick(e, 'Componente botón')} />
			</div>
		);
	}
}
