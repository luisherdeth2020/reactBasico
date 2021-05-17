import logo from './logo.svg';
import First from './components/First';
import './App.css';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import ContadorHooks from './components/ContadorHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';

function App() {
	let user = 'Luis';
	let estaciones = ['primavera', 'verano', 'otoño'];
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Bienvenido {user} <code>src/App.js</code> and save to reload.
				</p>
				<ul>
					{estaciones.map((estacion, indice) => (
						<li key={indice}>{estacion}</li>
					))}
				</ul>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<section>
					<First msg="Hola soy un Componente FUNCIONAL desde una Props" />
					<hr />
					<Propiedades
						cadena="Esto es una cadena de texto"
						numero={19}
						booleano={false}
						arreglo={[1, 2, 3]}
						objeto={{ nombre: 'Jon', correo: 'luis.herdeth@gmail.com' }}
						funcion={(num) => num * num}
						elementoReact={<i>Esto es un elemento HTML React </i>}
						componenteReact={<First msg="Soy un componente basado como FIRST/prop" />}
					/>
					<hr />
					<Estado />
					<hr />
					<RenderizadoCondicional />
					<hr />
					<RenderizadoElementos />
					<hr />
					<EventosES6 />
					<hr />
					<EventosES7 />
					<hr />
					<MasSobreEventos />
					<hr />
					<ComunicacionComponentes />
					<hr />
					<ContadorHooks titulo={'Hola'} />
					<hr />
					<RelojHooks />
					<hr />
					<AjaxHooks/>
				</section>
			</header>
		</div>
	);
}

export default App;
