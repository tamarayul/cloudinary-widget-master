import express from 'express';
import dotenv from 'dotenv';

import HttpError from './models/http-error.js';
import { apiVersion, frontEndUri } from './config.js';
import cldRoutes from './routes/cloudinary-routes.js';
import { deleteAllPhotos } from './controllers/cloudinary-controller.js';

const app = express();
dotenv.config();

app.use(express.json());

// Setting CORS Headers to every response of the server
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // * => this is the domain // should be = frontEndUri
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
	next();
});

//  Routes
app.use(`/api/${apiVersion}/photos`, cldRoutes);
app.use('/', () => { console.log(`/api/${apiVersion}/photos`) });

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || "An unknown error occured!" });
});

// default error if route not handled
app.use((error, req, res, next) => {
	throw new HttpError("Could not find this route.", 404);
});


// listen to requests
app.listen(process.env.PORT || 5000);
console.log("We are listening 🦻🏻");
