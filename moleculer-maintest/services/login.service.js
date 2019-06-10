const router = require('express').Router();

module.exports = {

	name: 'login',

	methods: {
		initRouter(router){
			router.get('/login', (req, res) => {
				res.send('Login service');
			})
		}
	},

	async started(){
		await this.broker.waitForServices(["www"]);
		this.initRouter(router);
		this.broker.call("www.assignRoute", {router});
	}

}