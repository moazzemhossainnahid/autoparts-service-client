import React, { useEffect, useState } from 'react';

import ManagePartsRow from './ManagePartsRow';
import DeletePartsModal from './Modals/DeletePartsModal';

const ManageParts = () => {

    const [number, setNumber] = useState(0);
    const [parts, setParts] = useState(null);
    const [deletePart, setDeletePart] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/api/v1/parts')
            .then(res => res.json())
            .then(data => setParts(data?.data))
    }, [number])

    console.log(parts);

    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Products: {parts?.totalParts}</p>
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
                                parts?.result?.map((part, index) =>
                                    <ManagePartsRow
                                        key={part?._id}
                                        part={part}
                                        index={index}
                                        setDeletePart={setDeletePart}
                                    ></ManagePartsRow>)
                            }

                        </tbody>
                    </table>
                </div>
                {
                    deletePart && <DeletePartsModal deletePart={deletePart} setNumber={setNumber} number={number} ></DeletePartsModal>
                }

            </div>
        </div>
    );
};

export default ManageParts;