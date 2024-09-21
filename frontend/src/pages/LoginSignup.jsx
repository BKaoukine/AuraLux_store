import React, { useState } from "react";

export const LoginSignup = () => {
	const [state, setState] = useState("login");
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		email: "",
	});

	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const login = async () => {
		console.log("loging is executed", formData);
		let responseData;
		await fetch("https://auralux-store.onrender.com/login", {
			method: "POST",
			headers: {
				Accept: "application/form-data",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => (responseData = data));
		if (responseData.success) {
			// Ensure this matches your backend response key
			console.log(responseData.success); // Add this log to check
			localStorage.setItem("auth-token", responseData.token);
			console.log("Redirecting..."); // Log before redirect
			window.location.replace("/"); // Try this instead
		} else {
			console.log("exec error");
			alert(responseData.errors);
		}
	};
	const signup = async () => {
		console.log("sign up is executed", formData);
		let responseData;
		await fetch("https://auralux-store.onrender.com/signup", {
			method: "POST",
			headers: {
				Accept: "application/form-data",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => (responseData = data));
		console.log(responseData);
		if (responseData.success) {
			// Ensure this matches your backend response key
			console.log(responseData.success); // Add this log to check
			localStorage.setItem("auth-token", responseData.token);
			console.log("Redirecting..."); // Log before redirect
			window.location.replace("/"); // Try this instead
		} else {
			alert(responseData.errors);
		}
	};
	return (
		<div className='flex flex-col items-center py-10 px-5 border-t-2 border-x-2 border-dotted mx-auto my-[15vh]  border-gray-400 w-[500px] gap-y-4'>
			<h1 className='font-light text-xl text-black'>
				{state} to <span className='uppercase font-semibold'>auralux</span>{" "}
				{state === "sign up" && "for free"}
			</h1>
			{state === "sign up" && (
				<div className='flex items-center justify-center py-4 px-8 bg-gray-100 w-[400px] mb-6'>
					<h2 className='text-gray-500'>
						Already have an account?{" "}
						<button
							onClick={() => {
								state === "login" ? setState("sign up") : setState("login");
							}}
							className='text-blue-600'>
							Sign in
						</button>
					</h2>
				</div>
			)}

			<div className='space-y-4'>
				{state === "sign up" && (
					<input
						className='flex items-center py-4 px-6 bg-gray-100 w-[400px]'
						type='text'
						name='username'
						value={formData.username}
						onChange={changeHandler}
						placeholder='Your name'
					/>
				)}
				<input
					className='flex items-center py-4 px-6 bg-gray-100 w-[400px]'
					type='email'
					name='email'
					value={formData.email}
					onChange={changeHandler}
					placeholder='Email Address'
				/>
				<input
					className='flex items-center py-4 px-6 bg-gray-100 w-[400px]'
					type='password'
					name='password'
					value={formData.password}
					onChange={changeHandler}
					placeholder='Password'
				/>
				<button
					onClick={() => {
						state === "sign up" ? signup() : login();
					}}
					className='flex items-center text-white justify-center py-4 px-6 bg-blue-600 w-[400px]'>
					{state === "sign up" ? "Create account" : "Login"}
				</button>
			</div>
			{state === "sign up" && (
				<p className='text-gray-500'>
					By creating an account, you agree to the <br />
					<span className='text-blue-600'>Terms & Conditions</span> and{" "}
					<span className='text-blue-600'>Privacy Policy</span>
				</p>
			)}
			{state === "login" && (
				<div className='flex items-center justify-center py-4 px-8 bg-gray-100 w-[400px] mb-6'>
					<h2 className='text-gray-500'>
						You Don't have an account?
						<button
							onClick={() => {
								state === "login" ? setState("sign up") : setState("login");
							}}
							className='text-blue-600'>
							Create one
						</button>
					</h2>
				</div>
			)}
		</div>
	);
};
