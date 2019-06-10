const express = require('express');

module.exports = {
	name: "hello",
	actions: {
		hello(ctx){
			return "hello world"
		}
	},
	started(){
		const app = express();
		app.get('/hello', (req, res) => {
			res.send('Hello');
		});
		app.get('/world', async (req, res) => {
			res.send(await this.broker.call("world.world"));
		});
		app.listen(3000, () => {
			console.log('Listening 3000');
		});
	}
}