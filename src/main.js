import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Card from "./card";

const Main = () => {
    return (
        <>
            <Header />
            <div className="main-text">
                <div>Hey there!</div>
                <div>Draw your meal now</div>
            </div>
            <Card />
        </>
    );
}

export default Main;