import React, { useEffect, useState } from 'react';
import DeleteServicesModal from './Modals/DeleteServicesModal';
import ManageServicesRow from './ManageServicesRow';


const ManageServices = () => {

    const [number, setNumber] = useState(0);
    const [services, setServices] = useState(null);
    const [deleteService, setDeleteService] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/api/v1/services')
            .then(res => res.json())
            .then(data => setServices(data?.data))
    }, [number])

    console.log(services);

    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Services: {services?.totalServices}</p>
                    <table className="border-collapse w-full bg-slate-200">
                        {/* <!-- head --> */}
                        <thead>
                            <tr className='text-center'>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Category</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}

                            {
                                services?.result?.map((service, index) =>
                                    <ManageServicesRow
                                        key={service?._id}
                                        service={service}
                                        index={index}
                                        setDeleteService={setDeleteService}
                                    ></ManageServicesRow>)
                            }

                        </tbody>
                    </table>
                </div>
                {
                    deleteService && <DeleteServicesModal deleteService={deleteService} setNumber={setNumber} number={number} ></DeleteServicesModal>
                }

            </div>
        </div>
    );
};

export default ManageServices;