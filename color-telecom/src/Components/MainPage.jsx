import React from "react";

import valid from "./img/valid.png";
import validwhite from "./img/validwhite.png";

import "./MainPage.css";

function MainPage() {
  return (
    <div className="container">
      <div className="information-pack">
        <h1 className="title-information">Informations du Forfait</h1>
        <div className="step-box">
          <div className="step-box-one">
            <p className="number-step-one">1</p>
            <img className="valid-logo" src={valid} alt="" />
          </div>
          <div className="rod"></div>
          <p className="number-step">2</p>
          <div className="small-rod-start"></div>
          <div className="small-rod-middle"></div>
          <div className="small-rod-middle"></div>
          <div className="small-rod-end"></div>
          <p className="number-step">3</p>
        </div>
      </div>

      <div className="pack-box">
        <div className="cardbox">
          <div className="title-card-box">
            <h2 className="title">Mensuel</h2>

            <img className="valid-logo-white" src={validwhite} alt="" />

            <div className="valid"></div>
          </div>
          <div className="card-information">
            <p className="pack-month">
              Forfait 10/mois <br></br>de réception
            </p>
            <p className="mobile">Sur vos fixes et mobiles</p>
            <p className="price">14.90€ HT</p>
          </div>
        </div>

        <div className="long-rod"></div>
        <div className="account-box">
          <div className="number-account">
            <h2 className="title-account">Type de numéro :</h2>
            <p className="account">Numéro Argent : 01 87 200 200</p>

            <h2 className="title-account">Zone :</h2>
            <p className="account">Paris - 01</p>
          </div>
        </div>
        <div className="btn-next-box">
          <button className="btn-next">SUIVANT</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
