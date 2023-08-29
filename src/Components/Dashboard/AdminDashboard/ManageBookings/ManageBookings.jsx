import React, { useEffect, useState } from "react";
import DeleteBookingsModal from "./Modals/DeleteBookingsModal";
import ManageBookingsRow from "./ManageBookingsRow";

const ManageBookings = () => {
  const [number, setNumber] = useState(0);
  const [bookings, setBookings] = useState(null);
  const [deleteBooking, setDeleteBooking] = useState(null);

  useEffect(() => {
    fetch("https://autoparts-service-server.vercel.app/api/v1/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data?.data));
  }, [number]);

  return (
    <div className=" text-left h-full w-full">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 px-8 mb-20">
          <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">
            Total Bookings Data: {bookings?.result?.length}
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
            {/* <!-- row 1 --> */}

            {bookings?.result?.map((booking, index) => (
              <ManageBookingsRow
                key={booking?._id}
                booking={booking}
                index={index}
                setDeleteBooking={setDeleteBooking}
              ></ManageBookingsRow>
            ))}
          </div>
        </div>
        {deleteBooking && (
          <DeleteBookingsModal
          deleteBooking={deleteBooking}
            setNumber={setNumber}
            number={number}
          ></DeleteBookingsModal>
        )}
      </div>
    </div>
  );
};

export default ManageBookings;
