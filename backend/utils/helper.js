const cloudinary = require("../cloud");
exports.sendError = (res, error, statusCode = 401) => {
	res.status(statusCode).json({ error });
};

exports.uploadImageToCloud = async (filepath) => {
	const { secure_url: url, public_id } = await cloudinary.uploader.upload(
		filepath,
		{
			gravity: "face",
			height: 500,
			width: 500,
			crop: "thumb",
		}
	);
	return { url, public_id };
};
