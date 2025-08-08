const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET);

exports.handler = async (event, context) => {
	// Functions works well with a get request but need below configuration for post requests
	try {
		if (event.httpMethod === 'OPTIONS') {
			// Respond to OPTIONS request with CORS headers
			const response = {
				statusCode: 204,
				headers: {
					'Access-Control-Allow-Origin': 'https://soundsavvyshop.netlify.app',
					'Access-Control-Allow-Methods': 'POST,OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
				body: '',
			};
			return response;
		}
		if (event.httpMethod === 'POST') {
			const requestBody = JSON.parse(event.body);
			const response = {
				statusCode: 200,
				headers: {
					'Access-Control-Allow-Origin': 'https://soundsavvyshop.netlify.app',
					'Access-Control-Allow-Methods': 'POST',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
				body: JSON.stringify({
					message: 'POST request successful',
					data: requestBody,
				}),
			};
			return response;
		} else if (event.httpMethod === 'GET') {
			const queryParams = event.queryStringParameters;
			const paymentIntent = await stripe.paymentIntents.create({
				amount: queryParams.total,
				currency: 'usd',
				automatic_payment_methods: {
					enabled: true,
				},
			});

			const response = {
				statusCode: 200,
				headers: {
					'Access-Control-Allow-Origin': 'https://soundsavvyshop.netlify.app',
					'Access-Control-Allow-Methods': 'GET',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
				body: JSON.stringify({
					message: 'GET request successful',
					params: paymentIntent,
				}),
			};
			return response;
		} else {
			throw new Error('Unsupported HTTP method');
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'An error occurred.' }),
		};
	}
};
