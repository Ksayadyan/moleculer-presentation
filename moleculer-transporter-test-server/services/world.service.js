const express = require('express');

module.exports = {
	name: "world",
	actions: {
		world(ctx){
			return "hello world"
		}
	},
}