const mongoose = require("mongoose");
mongoose
	.connect(
		`mongodb+srv://dee911db:6ePVZfVEeboIeJzz@cluster0.8wjsf.mongodb.net/blogapp?retryWrites=true&w=majority`
	)
	.then((e) => {
		console.log("db connected");
	})
	.catch((e) => {
		console.log(e);
	});
