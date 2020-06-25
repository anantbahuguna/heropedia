import React from "react";
import HomeCard from "./HomeCard";

const HomeCardList = ({ heroList }) => {
    if (heroList && heroList.length) {
        return (
            <>
                {heroList.map((hero) => (
                    <HomeCard hero={hero} key={hero.id} />
                ))}
            </>
        );
    }
    return <h1>List loading....</h1>;
};

export default HomeCardList;
