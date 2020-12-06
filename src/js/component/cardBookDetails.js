import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";

export const CardBookDetails = props => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-4 book-image">
						<img src={props.image} className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-8 book-info">
						<div className="card-body">
							<p className="card-title">{props.title}</p>
							<Link to={"/author/" + props.id_author}>
								<p className="author-name">{props.author}</p>
							</Link>
							<p>Género: {props.genre}</p>
							<div className="format-price">
								<p>Formato: {props.format_type}</p>
								<p>{props.price} €</p>
							</div>
							<button
								className="btn btn-outline-primary"
								type="button"
								onClick={() => {
									actions.addBookToShoppingCart(props.id_book, 1);
								}}>
								Añadir al carrito
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="synopsis">
				<p className="synopsis-title">Sinopsis:</p>
				<p className="card-text">{props.synopsis}</p>
			</div>
		</Fragment>
	);
};

CardBookDetails.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	genre: PropTypes.string,
	synopsis: PropTypes.string,
	image: PropTypes.string,
	format_type: PropTypes.string,
	price: PropTypes.string,
	id_author: PropTypes.integer,
	id_book: PropTypes.integer
};
