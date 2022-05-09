import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import auth from '../../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://quiet-hamlet-97708.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div>
            <Header></Header>
            <div className="md:w-96 w-72 my-10 py-6 px-10 rounded-lg shadow-xl bg-white mx-auto">
                <h1 className='text-center text-xl mb-4'>Add New Items</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-2 block
        w-full
        px-3
        md:py-1.5 py-1
        md:text-base text-sm
        md:font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={user.email} placeholder="Inventory Item Name" {...register("email")} />

                    <input className="form-control mb-2 block
        w-full
        px-3
        md:py-1.5 py-1
        md:text-base text-sm
        md:font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Inventory Item Name" {...register("name", { required: true, maxLength: 20 })} />

                    <input className="form-control mb-2 block
        w-full
        px-3
        md:py-1.5 py-1
        md:text-base text-sm
        md:font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  type="number" placeholder="Price" {...register("price", { required: true })} />

                    <input className="form-control mb-2 block
        w-full
        px-3
        md:py-1.5 py-1
        md:text-base text-sm
        md:font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Supplier's Name" {...register("supplier", { required: true })} />

                    <input className="form-control mb-2 block
        w-full
        px-3
        md:py-1.5 py-1
        md:text-base text-sm
        md:font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Photo URL' type="text" {...register("img")} />


                    <textarea className="
        form-control mb-2
        block
        w-full
        px-3
        md:py-1.5 py-1
        md:text-base text-sm
        md:font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " placeholder='Description' {...register("services")} />
                    <input type="submit" value="Add Service" className='border border-slate-300 bg-slate-200 text-slate-700 rounded w-full px-2.5 py-0.5 my-1 hover:bg-slate-300 hover:border-slate-300 hover:text-slate-800' />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItems;