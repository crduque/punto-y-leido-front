import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/register-component.scss";
// import { Link } from "react-router-dom";

export const RegisterHome = () => {
	const { store, actions } = useContext(Context);
	const [open, setOpen] = useState(false);

	const addingReader = () => {
		let usernameValue = document.querySelector("#username").value;
		let emailValue = document.querySelector("#email").value;
		let passwordValue = document.querySelector("#password").value;
		let confirmPasswordValue = document.querySelector("#confirmPassword").value;
		let finalPassword = null;
		let newReader = {
			id: 0,
			is_active: true,
			username: usernameValue,
			email: emailValue,
			password: finalPassword,
			name: "",
			description: "",
			address: "",
			date_of_birth: []
		};

		if (passwordValue == confirmPasswordValue) {
			finalPassword = passwordValue;
			return newReader;
		} else {
			setOpen(true);
		}
	};

	if (store.readers.length == 0) {
		return "Cargando tu página favorita...";
	} else {
		return (
			<div className="register-form">
				<form
					onSubmit={event => {
						if (addingReader() !== undefined) {
							actions.addReader(addingReader());
						} else {
							event.preventDefault();
							alert("Has escrito mal la contraseña, inténtalo de nuevo.");
						}
					}}>
					<div className="form-group">
						<label>Username</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter username"
							id="username"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							id="email"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							id="password"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Confirm password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Confirm password"
							id="confirmPassword"
							value={null}
						/>
					</div>
					{/* <Link to="/"> */}
					<button type="submit" className="btn btn-primary form-control">
						Create account
					</button>
					{/* </Link> */}
				</form>
			</div>
		);
	}
};