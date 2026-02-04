import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
    const [count, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all the time");
    useEffect(() => {
        console.log("I run only once.");
    }, [])
    useEffect(() => {
        console.log("I run when 'keyword' changes.")
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'count' changes.")
    }, [count]);
    useEffect(() => {
        console.log("I run when keyword & counter change")
    }, [count, keyword]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            />
          <h1>{count}</h1>
          <Button text={"Click Me"} onClick={onClick} />
        </div>
    );
}

export default App;
