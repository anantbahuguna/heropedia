import axios from "axios";

const baseUrl = `https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}`;

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
};

export const fetchData = async (setHeroList) => {
    try {
        const res = await axios.get(`${baseUrl}/${getRandomInt(731)}`);
        console.log(res.data);
        setHeroList((prevState) => [...prevState, res.data]);
        // setHero(res.data);
    } catch (err) {
        console.error(err.message);
    }
};
 
export const fetchSearchResults = async (search, setResults) => {
    const res = await axios.get(`${baseUrl}/search/${search}`);
    const data = res.data.results;
    console.log(data);
    setResults(data);
};