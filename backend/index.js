const port = 4000;
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection:

mongoose.connect(
	"mongodb+srv://auraluxdev:478818@cluster0.1hdcj.mongodb.net/auralux"
);

// API Initialisation

app.get("/", (req, resp) => {
	resp.send("Express App is Running");
});

// Storage Engine Initialisation

const storage = multer.diskStorage({
	destination: "./upload/images",
	filename: (req, file, cb) => {
		return cb(
			null,
			`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for the images:
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, resp) => {
	resp.json({
		success: 1,
		image_url: `http://localhost:${port}/images/${req.file.filename}`,
	});
});

// Schema Product Initialisation:

const Product = mongoose.model("Product", {
	id: {
		type: Number,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	new_Price: {
		type: Number,
		required: true,
	},
	old_Price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	available: {
		type: Boolean,
		default: true,
	},
});
// Adding product API
app.post("/add_product", async (req, resp) => {
	let products = await Product.find({});
	let id;
	if (products.length > 0) {
		let last_product_array = products.slice(-1);
		let last_product = last_product_array[0];
		id = last_product.id + 1;
	} else {
		id = 1;
	}
	const product = new Product({
		id: id,
		name: req.body.name,
		image: req.body.image,
		category: req.body.category,
		new_Price: req.body.new_Price,
		old_Price: req.body.old_Price,
	});

	console.log(product);
	await product.save();
	console.log("Saved");
	resp.json({
		success: true,
		name: req.body.name,
	});
});

//Remove Product API

app.post("/remove_product", async (req, resp) => {
	await Product.findOneAndDelete({ id: req.body.id });
	console.log("Removed");
	resp.json({
		success: true,
		name: req.body.name,
	});
});

// Getting All Product API
app.get("/all_products", async (req, resp) => {
	let all_products = await Product.find({});
	console.log("all products fetched");
	resp.send(all_products);
});

app.listen(port, (error) => {
	if (!error) {
		console.log("Server running on " + port);
	} else {
		console.log(error);
	}
});
