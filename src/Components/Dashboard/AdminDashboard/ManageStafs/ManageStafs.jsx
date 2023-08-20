import React, { useEffect, useState } from 'react';
import ManageStafsRow from './ManageStafsRow';
import DeleteStafsModal from './Modals/DeleteStafsModal';



const ManageStafs = () => {

    const [number, setNumber] = useState(0);
    const [stafs, setStafs] = useState(null);
    const [deleteStaf, setDeleteStaf] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/api/v1/stafs')
            .then(res => res.json())
            .then(data => setStafs(data?.data))
    }, [number])

    console.log(stafs);

    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Stafs: {stafs?.result?.length}</p>
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
                                stafs?.result?.map((staf, index) =>
                                    <ManageStafsRow
                                        key={staf?._id}
                                        staf={staf}
                                        index={index}
                                        setDeleteStaf={setDeleteStaf}
                                    ></ManageStafsRow>)
                            }

                        </tbody>
                    </table>
                </div>
                {
                    deleteStaf && <DeleteStafsModal deleteStafs={deleteStaf} setNumber={setNumber} number={number} ></DeleteStafsModal>
                }

            </div>
        </div>
    );
};

export default ManageStafs;