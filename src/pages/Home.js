import React, { useEffect, useState } from "react";
import HomeCardList from "../components/HomeCardList";
import { fetchData } from "../actions";
import SearchCardList from "../components/SearchCardList";
import Navbar from "../components/layout/Navbar";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");
    const [heroList, setHeroList] = useState([]);
    useEffect(() => {
        for (let i = 0; i < 4; i++) {
            fetchData(setHeroList);
        }
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        if (input !== "") {
            setSearch(input);
            setInput("");
        }
    };

    if (loading) return <h1>Loading........</h1>;
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
            <br />
            <br />
            {search ? (
                <SearchCardList search={search} />
            ) : (
                heroList &&
                heroList.length && <HomeCardList heroList={heroList} />
            )}
        </div>
    );
};

export default Home;
