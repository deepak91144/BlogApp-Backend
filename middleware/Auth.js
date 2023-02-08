var jwt = require("jsonwebtoken");
const userModel = require("../model/User");

exports.isSignedIn = async (req, res, next) => {
	const token = req.header("Authorization").replace("Bearer ", "");

	if (!token) {
		return res.status(404).json({
			message: "login first",
		});
	}
	const decoded = await jwt.verify(token, "thisissecret");

	req.user = await userModel.findById(decoded.id);
	next();
};
