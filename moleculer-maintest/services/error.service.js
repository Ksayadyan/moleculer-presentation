const router = require('express').Router();

module.exports = {

	name: 'error',

	methods: {
		initRouter(router){
			router.get('/error', (req, res) => {
				throw new Error('Test Error');
			})
		}
	},

	async started(){
		this.initRouter(router);
		await this.broker.waitForServices(['www']);
		this.broker.call('www.assignRoute', {router});
	}

}