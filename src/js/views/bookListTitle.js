import React, { useContext, Fragment, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import { LittleAuthorInfo } from "../component/littleAuthorInfo.jsx";
import "../../styles/bookListTittle.scss";
export const BookListTitle = () => {
	const { store, actions } = useContext(Context);

	if (store.booksByTitle.lenght != 0 || store.authorsByName.lenght != 0) {
		const book = store.booksByTitle.map((bookInfo, index) => (
			<Link to={"/book/" + bookInfo.id} key={index}>
				<LittleBookCover
					name={bookInfo.title}
					img={bookInfo.image}
					subName={bookInfo.format_type}
					idBook={bookInfo.id}
					display="displaying"
				/>
			</Link>
		));
		const author = store.authorsByName.map((authorInfo, index) => (
			<Link to={"/author/" + authorInfo.id} key={index}>
				<LittleAuthorInfo
					name={authorInfo.name}
					img={authorInfo.image}
					idAuthor={authorInfo.id}
					display="displaying"
				/>
			</Link>
		));
		return (
			<Fragment>
				<h1 className="text-center">Resultado de la búsqueda</h1>
				<div className="book-list-title">
					<h2>Libros</h2>
					<div className="searched-books">{book}</div>
					<h2>Autores</h2>
					<div className="searched-authors">{author}</div>
				</div>
			</Fragment>
		);
	} else return "Estamos buscando los libros";
};
