import React, { useState } from 'react';

export default function ContadorHooks(parametro) {
    // parametros = props
	// console.log(useState())
	const [contador, setContador] = useState(0);

	const sumar = () => setContador(contador + 1) 
	const restar = () => setContador(contador - 1)

	return (
		<>
			<h2>Hoks - useState</h2>
			<button onClick={sumar}>+</button>
			<button onClick={restar}>+</button>
            <p>Contador de {parametro.titulo}</p>
            <h3>{contador}</h3>
		</>
	);
}

ContadorHooks.defaultProps ={
    titulo:"clicks",
}