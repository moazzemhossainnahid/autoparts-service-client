
import { toast } from 'react-toastify';

const DeletePartsModal = ({ deletePart, setNumber, number }) => {
    console.log(deletePart);
    const { name, price, image, description, category, stock, sku, _id } = deletePart;


    const handleDelete = (id) => {
        const url = `http://localhost:5000/api/v1/parts/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    // console.log(data);
                    toast.success(` Order id (${_id}) has been deleted.`);
                    setNumber(number + 1);
                }else if(data?.status === 'fail'){
                    toast.error(` Somethig wrong...`);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-part-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delete-part-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>Delete Part</h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="w-full md:w-4/5 order-2 md:order-1">
                            <h3 className="font-bold text-lg">{name}</h3>
                            <p className='my-4'>Category: {category}</p>
                            <p className='my-4'>Price: {price}</p>
                            <p className='my-4'>sku: {sku}</p>
                            <p className='my-4'>Stock: {stock}</p>
                        </div>
                        <div className="w-full md:w-1/5 order-1 md:order-2">
                            <img src={image} alt="cover" className="w-24 h-24 rounded-full mx-auto" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="delete-part-modal" onClick={() => handleDelete(_id)} className="btn bg-gray-700 text-white">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeletePartsModal;