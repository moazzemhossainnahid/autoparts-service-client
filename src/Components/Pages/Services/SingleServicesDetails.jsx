import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmptyList from "../../Others/EmptyList/EmptyList";
import Chip from "../../Others/Chip";
import useServices from "../../../Hooks/useServices";
import RelatedServices from "./RelatedServices";

const SingleServicesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [services] = useServices();
  const [service, setService] = useState(null);

  useEffect(() => {
    let service = services?.find((s) => s._id === id);
    if (service) {
        setService(service);
    }
  }, [services, id]);

  return (
    <div className="w-full">
      <div className="container py-7">
        <button
          onClick={() => navigate(-1)}
          className="blog-goBack w-32 rounded mx-3 justify-start px-5 py-2 flex text-indigo-600 bg-gray-200"
        >
          <span> &#8592;</span> <span className="pl-2">Go Back</span>
        </button>
        {service ? (
          <div className="blog-wrap pt-10">
            <header>
              <p className="blog-date pb-5 font-semibold text-gray-500">
                Published {new Date(service.createdAt).toLocaleString()}
              </p>
              <h1 className="text-black pb-3 text-2xl md:text-4xl font-bold">
                {service?.name}
              </h1>
              <div className="blog-subCategory w-full flex justify-center">
                <Chip label={service?.category} />
              </div>
            </header>
            <img className="py-5 mx-auto" src={service?.image} alt="cover" />
            <div className="space-y-4">          
              <h2 className="text-indigo-700 text-xs font-semibold">
                {service?.sku.slice(0, 17)}
              </h2>
              <h3 className="text-indigo-700 text-xl font-semibold">
                <span className="pr-3"> Price:</span>
                <span className="pr-1">&#2547;</span>
                {service?.price}/=
              </h3>
            </div>
            <div className="">
              <p className="blog-desc p-5 md:px-10">{service?.description}</p>
            </div>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
      <RelatedServices service={service} />
    </div>
  );
};

export default SingleServicesDetails;
