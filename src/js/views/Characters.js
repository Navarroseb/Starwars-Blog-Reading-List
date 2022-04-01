import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
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
                <div className="...">
                    <div className="row flex-row">
                        {store.characters.map((value, index) => (
                        <div key={index} className="card m-2 g-4 bg-secondary border border-danger" style={{ width: "20rem" }}>
                            <img src={Charactersimg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-white">{value.name}</p>
                                <div className="card-boton">
                                    <Link className="btn-boton" to={"Charactersdetails/" + value.id}>
                                        Learn more!
                                    </Link>
                                    <button type="button" className="btnfav border border-danger" onClick={()=> actions.addfavoritos(value.name)}>
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