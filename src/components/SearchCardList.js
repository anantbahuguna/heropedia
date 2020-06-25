import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const baseUrl = `https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}`;

const SearchCardList = ({ search }) => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        console.log("search", search);
        const fetchData = async () => {
            const res = await axios.get(`${baseUrl}/search/${search}`);
            const data = res.data.results;
            console.log(data);
            setResults(data);
        };
        fetchData();
    }, [search]);
    return (
        <>
            {results && results.length ? (
                <>
                    <h1>Found {results.length} results</h1>
                    {results.map((result) => (
                        <Link
                            to={{ pathname: "/info", state: { hero: result } }}
                            key={result.id}
                        >
                            {result.name}
                        </Link>
                    ))}
                </>
            ) : (
                <h1>Searching .... {search}</h1>
            )}
        </>
    );
};

export default SearchCardList;
