import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Planetsbg from "../../img/Planetsbg.jpg";
import Planetimg from "../../img/Planetimg.jpg";


export const Planets = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPlanets();
    }, []);
    return (
        <>
            <img src={Planetsbg} className="card-img-top" alt="..." />
            <div className="container">
                <div className="scrollmenu mx-auto">
                    <div className="row flex-row flex-nowrap">
                        {store.Characters.map((value, index) => (
                        <div key={index} className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
                            <img src={Planetimg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{value.name}</p>
                                <div className="card-boton">
                                    <Link className="btn-boton" to={"Charactersdetails/" + value.uid}>
                                        Learn more!
                                    </Link>
                                    <button type="button" className="btnfav" onClick={()=> actions.addfavoritos(value.name)}>
                                        <i className="far fa-heart" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}



                         {/* <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
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
                        <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
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
                        <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
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
                        <div className="card m-2 g-4" style={{ width: "20rem", height: "45rem" }}>
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
                        </div> */}
                    </div>
                </div> 
            </div>
        </>
    )
}