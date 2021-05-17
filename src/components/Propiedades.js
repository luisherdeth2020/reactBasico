import PropTypes from 'prop-types';
const Propiedades = (props) => {
	return (
		<div>
			<h2>{props.porDefecto}</h2>
			<ul>
				<li>{props.cadena}</li>
				<li>{props.numero}</li>
				<li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
				{/* join, le da formato al texto con "coma" */}
				<li>{props.arreglo.join(',')}</li>
				<li>{props.objeto.nombre + ' - ' + props.objeto.correo}</li>
				<li>{props.arreglo.map(props.funcion).join(',')}</li>
				<li>{props.elementoReact}</li>
				<li>{props.componenteReact}</li>
			</ul>
		</div>
	);
};

Propiedades.defaultProps = {
	porDefecto: 'Las Props',
};
export default Propiedades;

Propiedades.propTypes = {
	numero: PropTypes.number.isRequired,
};
