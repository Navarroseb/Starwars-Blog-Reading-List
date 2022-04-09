import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Characters.css";
import Charactersbg from "../../img/Charactersbg.jpg";
import Charactersimg from "../../img/Charactersimg.jpg";


export const Characters = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacters();
    }, []);
    return (
        <>
            <img src={Charactersbg} className="card-img-top" alt="..." />
            <div className="container">
                {store.characters.map((value, index) => (
                    <div key={index} className="row flex-row">
                        <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
                            <img src={Charactersimg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className={props}>Name: {value.name}</p>
                                <div className="botones-card">
                                    <Link>
                                        <a href={"Charactersdetails/" + value.id} className="btn btn-border border-primary ms-2">Learn More!</a>
                                    </Link>
                                    <a href="/favoritos" className="btn btn-border border-warning ms-2" onClick={() => actions.addFavoritos(value.name)}><i className="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

{/* <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
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
                    </div> */}

