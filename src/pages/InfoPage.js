import React, { useEffect } from "react";

const InfoPage = ({
    location: {
        state: { hero },
    },
}) => {
    useEffect(() => {
        console.log(hero);
    }, []);
    return <h1>{hero["biography"]["full-name"]}</h1>;
};

export default InfoPage;
