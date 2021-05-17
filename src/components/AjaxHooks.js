import React, { useState, useEffect } from 'react';

function Pokemon({ avatar, name }) {
	return (
		<figure>
			<img src={avatar} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default function AjaxHooks() {
	const [pokemons, setPokemons] = useState([]);

	return (
		<>
			<h2>Peticiones Asíncronzas en Hooks</h2>
			{pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			) : (
				pokemons.map((el) => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)
			)}
		</>
	);
}
