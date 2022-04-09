import React from "react";
import "../../styles/home.css";
import "../../styles/Characters.css";
import Charactersbg from "../../img/Charactersbg.jpg";
import Charactersimg from "../../img/Charactersimg.jpg";


export const Characters = (props) => {

    return (
        <>
            <img src={Charactersbg} className="card-img-top" alt="..." />
            <div className="container">
                <div className="row flex-row">
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
                        <img src={Charactersimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>

                            </h5>
                            <p className={props}>Name: </p>
                            <div className="botones-card">
                                <a href="/Charactersdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
                        <img src={Charactersimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>

                            </h5>
                            <p className={props}>Name: </p>
                            <div className="botones-card">
                                <a href="/Charactersdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
                        <img src={Charactersimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>

                            </h5>
                            <p className={props}>Name: </p>
                            <div className="botones-card">
                                <a href="/Charactersdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
                        <img src={Charactersimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>

                            </h5>
                            <p className={props}>Name: </p>
                            <div className="botones-card">
                                <a href="/Charactersdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
                        <img src={Charactersimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>

                            </h5>
                            <p className={props}>Name: </p>
                            <div className="botones-card">
                                <a href="/Charactersdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
                        <img src={Charactersimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>

                            </h5>
                            <p className={props}>Name: </p>
                            <div className="botones-card">
                                <a href="/Charactersdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}