import React from "react";
import "../../styles/planets.css"
import Planetsbg from "../../img/Planetsbg.jpg";
import Planetimg from "../../img/Planetimg.jpg";


export const Planets = (props) => {
    return (
        <>
            <img src={Planetsbg} className="card-img-top" alt="..." />
            <div className="container">
                <div className="row flex-row">
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "30rem" }}>
                        <img src={Planetimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>
                                Name:
                            </h5>
                            <p className={props}></p>
                            <div className="botones-card">
                                <a href="/Planetsdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "30rem" }}>
                        <img src={Planetimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>
                                Name:
                            </h5>
                            <p className={props}></p>
                            <div className="botones-card">
                                <a href="/Planetsdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "30rem" }}>
                        <img src={Planetimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>
                                Name:
                            </h5>
                            <p className={props}></p>
                            <div className="botones-card">
                                <a href="/Planetsdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "30rem" }}>
                        <img src={Planetimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>
                                Name:
                            </h5>
                            <p className={props}></p>
                            <div className="botones-card">
                                <a href="/Planetsdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "30rem" }}>
                        <img src={Planetimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>
                                Name:
                            </h5>
                            <p className={props}></p>
                            <div className="botones-card">
                                <a href="/Planetsdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 g-4" style={{ width: "20rem", height: "30rem" }}>
                        <img src={Planetimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={props}>
                                Name:
                            </h5>
                            <p className={props}></p>
                            <div className="botones-card">
                                <a href="/Planetsdetails" className="btn btn-border border-primary ms-2">Learn More!</a>
                                <a href="/favoritos" className="btn btn-border border-warning ms-2"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}