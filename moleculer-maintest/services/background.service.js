const router = require('express').Router();

module.exports = {

	name: 'background',

	methods: {
		infiniteLog(){
			for(let i = 0; i < 1000; i++){
				setTimeout(() => {
					console.log(i);
				}, i * 1000);	
			}
		},

		initRouter(router){
			router.get('/background', (req, res) => {
				res.send('Work started');
				this.infiniteLog();
			})
		}
	},

	async started(){
		this.initRouter(router);
		await this.broker.waitForServices(['www']);
		this.broker.call('www.assignRoute', {router});

	}

}