// Initialisation of the Backend Server
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());
require("dotenv").config();

// Database Connection
mongoose.connect(
	"mongodb+srv://auraluxdev:478818@cluster0.1hdcj.mongodb.net/auralux"
);

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

// Creating Upload Endpoint for the images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, resp) => {
	resp.json({
		success: 1,
		image_url: `http://localhost:${port}/images/${req.file.filename}`,
	});
});

// Schema Product Initialisation
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

// Adding product API
app.post("/add_product", async (req, resp) => {
	let products = await Product.find({});
	let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

	const product = new Product({
		id,
		name: req.body.name,
		image: req.body.image,
		category: req.body.category,
		new_Price: req.body.new_Price,
		old_Price: req.body.old_Price,
	});

	await product.save();
	resp.json({ success: true, name: req.body.name });
});

// Remove Product API
app.post("/remove_product", async (req, resp) => {
	await Product.findOneAndDelete({ id: req.body.id });
	resp.json({ success: true, name: req.body.name });
});

// Getting All Product API
app.get("/all_products", async (req, resp) => {
	let all_products = await Product.find({});
	resp.send(all_products);
});

// User Model Schema
const Users = mongoose.model("Users", {
	name: { type: String },
	email: { type: String, unique: true },
	password: { type: String },
	cartData: { type: Object },
	date: { type: Date, default: Date.now },
});

// User Registration EndPoint
app.post("/signup", async (req, resp) => {
	let check = await Users.findOne({ email: req.body.email });
	if (check) {
		return resp.status(400).json({
			success: false,
			errors: "existing user found with same email address",
		});
	}
	let cart = {};
	for (let i = 0; i < 300; i++) {
		cart[i] = 0;
	}
	const user = new Users({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		cartData: cart,
	});

	await user.save();

	const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
	resp.json({ success: true, token });
});

// User Login EndPoint
app.post("/login", async (req, resp) => {
	let user = await Users.findOne({ email: req.body.email });
	if (user && req.body.password === user.password) {
		const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
		resp.json({ success: true, token });
	} else {
		resp.json({ success: false, errors: "Invalid email or password" });
	}
});

// New Collection EndPoint
app.get("/newcollections", async (req, resp) => {
	let products = await Product.find({});
	let newCollection = products.slice(-8);
	resp.send(newCollection);
});

// Popular EndPoint
app.get("/popular", async (req, resp) => {
	let products = await Product.find({});
	let popular = products.slice(6, 13);
	resp.send(popular);
});

// Fetch User Middleware
const fetchUser = async (req, resp, next) => {
	const token = req.header("auth-token");
	if (!token) {
		return resp.status(401).send({ errors: "Authentication Failed!" });
	}
	try {
		const data = jwt.verify(token, "secret_ecom");
		req.user = data.user;
		next();
	} catch (error) {
		resp
			.status(401)
			.send({ errors: "Please Authenticate using another token" });
	}
};

// Cart Data EndPoint
app.post("/addtocart", fetchUser, async (req, resp) => {
	let userData = await Users.findById(req.user.id);
	userData.cartData[req.body.itemId] += 1;
	await userData.save();
	resp.send("Added");
});

app.post("/removefromcart", fetchUser, async (req, resp) => {
	let userData = await Users.findById(req.user.id);
	if (userData.cartData[req.body.itemId] > 0)
		userData.cartData[req.body.itemId] -= 1;
	await userData.save();
	resp.send("Removed");
});

app.post("/getcart", fetchUser, async (req, resp) => {
	let userData = await Users.findById(req.user.id);
	resp.json(userData.cartData);
});

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));
	app.get("*", (req, resp) =>
		resp.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"))
	);
}

app.listen(port, (error) => {
	if (!error) {
		console.log("Server running on " + port);
	} else {
		console.log(error);
	}
});
