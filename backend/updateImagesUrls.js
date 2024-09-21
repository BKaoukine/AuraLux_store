const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://auraluxdev:478818@cluster0.1hdcj.mongodb.net/auralux?retryWrites=true&w=majority&appName=Cluster0"
	)
	.then(() => console.log("Database Connected"))
	.catch((err) => console.error("Database connection error:", err));

const Product = mongoose.model("Product", {
	id: { type: Number, required: true },
	name: { type: String, required: true },
	image: { type: String, required: true },
	category: { type: String, required: true },
	new_Price: { type: Number, required: true },
	old_Price: { type: Number, required: true },
	date: { type: Date, default: Date.now },
	available: { type: Boolean, default: true },
});

const updateImageUrls = async () => {
	try {
		const products = await Product.find({});
		const baseUrl = "https://auralux-store.onrender.com";

		for (let product of products) {
			if (product.image.startsWith("http://localhost:4000")) {
				product.image = product.image.replace("http://localhost:4000", baseUrl);
				await product.save();
				console.log(`Updated image for ${product.name}`);
			}
		}

		console.log("All applicable images updated.");
	} catch (error) {
		console.error("Error updating images:", error);
	} finally {
		mongoose.connection.close();
	}
};

updateImageUrls();
