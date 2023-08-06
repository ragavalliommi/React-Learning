import { useState, useEffect } from 'react'

const pageTitle = document.title;

const Support = () => {

    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        if(count > 0){
            document.title = `${pageTitle}--${count}`
        }
    });

    return (
        <button className="outline" onClick={updateCount}>
            {count === 0 ? "Show your Support" : `Supported : ${count}`}
        </button>
    )
}

export default Support;