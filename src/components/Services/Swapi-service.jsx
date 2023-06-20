export default class SwapiService {
	_urlBase = 'https://swapi.dev/api';
	_imgUrl = 'https://starwars-visualguide.com/assets/img/';

	getResource = async (url) => {
		const data = await fetch(url);
		if (!data.ok) {
			throw new Error(`Error! Url: ${url}`);
		}
		const body = await data.json();
		return body;
	};

	getFilms = async () => {
		return await this.getResource(`${this._urlBase}/films/`);
	};
	getPeople = async () => {
		const res = await this.getResource(`${this._urlBase}/people/`);
		return this._transformDataArray(res, 'characters');
	};
	getPlanets = async () => {
		const res = await this.getResource(`${this._urlBase}/planets/`);
		return this._transformDataArray(res, 'planets');
	};
	getSpices = async () => {
		return await this.getResource(`${this._urlBase}/species/`);
	};
	getStarships = async () => {
		const res = await this.getResource(`${this._urlBase}/starships/`);
		return this._transformDataArray(res, 'starships');
	};
	getVehicles = async () => {
		return await this.getResource(`${this._urlBase}/vehicles/`);
	};
	getPerson = async (id) => {
		const res = await this.getResource(`${this._urlBase}/people/${id}`);
		return this._transformPesron(res, 'characters', id);
	};
	getSpecificPlanet = async (id) => {
		const res = await this.getResource(`${this._urlBase}/planets/${id}`);
		return this._transformPlanet(res, 'planets', id);
	};
	getSpecificStarship = async (id) => {
		const res = await this.getResource(`${this._urlBase}/starships/${id}`);
		return await this._transformStarship(res, 'starships', id);
	};
	_transformDataArray(data, urlPrefix) {
		const result = data.results.map((item) => {
			const regExp = /\/([0-9]*)\/$/;
			const id = item.url.match(regExp)[1];
			return {
				name: item.name,
				id: id,
				imgSrc: `${this._imgUrl}/${urlPrefix}/${id}.jpg`,
			};
		});
		return result;
	}
	_transformStarship(result, urlPrefix, id) {
		return {
			name: result.name,
			imgSrc: `${this._imgUrl}/${urlPrefix}/${id}.jpg`,
			id: id,
			parametres: {
				model: result.model,
				crew: result.crew,
				length: result.length,
			},
		};
	}
	_transformPlanet(planet, urlPrefix, id) {
		return {
			name: planet.name,
			imgSrc: `${this._imgUrl}/${urlPrefix}/${id}.jpg`,
			id: id,
			parametres: {
				diameter: planet.diameter,
				gravity: planet.gravity,
				population: planet.population,
				climate: planet.climate,
			},
		};
	}
	_transformPesron(person, urlPrefix, id) {
		return {
			name: person.name,
			imgSrc: `${this._imgUrl}/${urlPrefix}/${id}.jpg`,
			id: id,
			parametres: {
				birthYear: person.birth_year,
				height: person.height,
				gender: person.gender,
			},
		};
	}
}
const swapi = new SwapiService();
swapi.getPerson(3).then((res) => console.log(res));
