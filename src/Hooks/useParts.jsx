import { useEffect, useState } from 'react';

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/parts`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => setParts(data?.data?.result))
    }, []);

    // console.log(parts);

    return [parts];
};

export default useParts;