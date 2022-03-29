import React from "react";
import {Charactersdetails} from "./Characterdetails";
import "../../styles/home.css";
import Charactersimg from "../../img/Charactersimg";

export const Home = (props) => {
	return (
		// div padre //
		<div className="padre">
			<Planetsdetails/>
		<Charactersdetails/>
			<h1>Characters</h1>
			<div className="scrollmenu mx-auto">
				<div className="row flex-row flex-nowrap">
					<div className="card md-3 g-4">
						<img src={Charactersimg} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className={props}>
								<p>gender:</p>
								<p>gender:</p>
								<p>gender:</p>
							</h5>
							<p className={props}></p>
							<a href="#" className="btn btn-border border-primary ms-2">Learn More!</a>
							<a href="#" className="btn btn-border border-warning ms-2"><i className="fa-regular fa-heart"></i></a>
						</div>
					</div>
					<div className="card md-3 g-4">
						<img src={Charactersimg} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className={props}>
								<p>gender:</p>
								<p>gender:</p>
								<p>gender:</p>
							</h5>
							<p className={props}></p>
							<a href="#" className="btn btn-border border-primary ms-2">Learn More!</a>
							<a href="#" className="btn btn-border border-warning ms-2"><i className="fa-regular fa-heart"></i></a>
						</div>
					</div>
					<div className="card md-3 g-4">
						<img src={Charactersimg} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className={props}>
								<p>gender:</p>
								<p>gender:</p>
								<p>gender:</p>
							</h5>
							<p className={props}></p>
							<a href="#" className="btn btn-border border-primary ms-2">Learn More!</a>
							<a href="#" className="btn btn-border border-warning ms-2"><i className="fa-regular fa-heart"></i></a>
						</div>
					</div>
					<div className="card md-3 g-4">
						<img src={Charactersimg} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className={props}>
								<p>gender:</p>
								<p>gender:</p>
								<p>gender:</p>
							</h5>
							<p className={props}></p>
							<a href="#" className="btn btn-border border-primary ms-2">Learn More!</a>
							<a href="#" className="btn btn-border border-warning ms-2"><i className="fa-regular fa-heart"></i></a>
						</div>
					</div>
					<div className="card md-3 g-4">
						<img src={Charactersimg} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className={props}>
								<p>gender:</p>
								<p>gender:</p>
								<p>gender:</p></h5>
							<p className={props}></p>
							<a href="#" className="btn btn-border border-primary ms-2">Learn More!</a>
							<a href="#" className="btn btn-border border-warning ms-2"><i className="fa-regular fa-heart"></i></a>
						</div>
					</div>
					</div>
			</div>
        </div>    