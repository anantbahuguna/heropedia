import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ hero }) => {
    return (
        <div>
            <Link to={{ pathname: "/info", state: { hero } }}>{hero.name}</Link>
        </div>
    );
};

export default HomeCard;
