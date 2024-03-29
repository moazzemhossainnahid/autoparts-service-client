import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://autoparts-service-server.vercel.app/api/v1/services`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        }) 
            .then(res => res.json())
            .then(data => setServices(data?.data?.result))
    }, []);

    // console.log(services);

    return [services];
};

export default useServices;