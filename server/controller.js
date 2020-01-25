module.exports = {
	getProduct: (req, res) => {
		const database = req.app.get("db");
		const {id} = req.params
		database.get_product(+id).then(response => {
			const data = response[0];
			console.log(data)
			res.status(200).send(data);
		});
	},

	getAllProducts: (req, res) => {
		const database = req.app.get("db");
		database.get_products().then(data => res.status(200).send(data));
	},

	addProduct: (req, res) => {
		console.log(req.body);
		const database = req.app.get("db");
		const {name, price, image} = req.body;

		database.add_product([name, price, image]).then(() => res.sendStatus(200));
	},

	updateProduct: (req, res) => {
		const database = req.app.get("db");
		const {id} = req.params;
		const {name, price, image} = req.body;

		database.update_product([id, name, price, image]).then(() => res.sendStatus(200));
	},

	deleteProduct: (req, res) => {
		const database = req.app.get("db");
		const {id} = req.params;

		database.delete_product(id).then(() => res.sendStatus(200));
	}
};