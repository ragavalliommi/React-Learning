import { useState } from 'react'


const Support = () => {

    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }
    return (
        <button className="outline" onClick={updateCount}>
            {count === 0 ? "Show your Support" : `Supported : ${count}`}
        </button>
    )
}

export default Support;