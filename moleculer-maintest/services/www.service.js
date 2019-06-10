const express = require('express');

module.exports = {

	name: 'www',

	methods: {
		initRootRoutes(app){
			app.get('/', (req, res) => {
				res.send('Root Api response');
			})
		}
	},

	actions: {
		assignRoute(ctx){
			this.app.use(ctx.params.router)
		}
	},

	created(){
		this.app = express();
		this.initRootRoutes(this.app);
	},

	started(){
		this.app.listen(3000, () => {
			console.log('Server is up on port 3000');
		})
	}

}