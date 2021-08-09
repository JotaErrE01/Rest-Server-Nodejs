const express = require('express');
const cors = require('cors');

class Server {

	constructor(){
		this.app = express();
		this.PORT = process.env.PORT;

		//Middlewares
		this.middlewares();

		//Rutas de mi aplicacion
		this.routes();
	}

	middlewares(){

		//CORS	
		this.app.use( cors() );

		// Parseo del body
		this.app.use( express.json() );

		//Directorio Publico
		this.app.use(express.static('public'));
	}

	routes(){
		this.app.use('/api/users', require('../routes/user'));
	}
	
	listen(){
		this.app.listen(this.PORT, () => {
			console.log(`Servidor Iniciado en el Puerto ${this.PORT}`);
		})
	}
}

module.exports = Server;
