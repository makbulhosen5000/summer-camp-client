import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from '../../SectionTitle/SectionTitle';

const AddCourse = () => {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

       const onSubmit = (data) => {

           const saveUser = { image:data.image,name: data.name, email: data.email,subject:data.subject,price:data.price,seats:data.seats };
           fetch("https://summer-camp-server-ecru.vercel.app/yoga-classes", {
             method: "POST",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(saveUser),
           })
             .then((res) => res.json())
             .then((data) => {
               if (data.insertedId) {
                 reset();
                 navigate("/dashboard/add-course");
                 Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: "Course Added Successfully ",
                   showConfirmButton: false,
                   timer: 1500,
                 });
               }
             });
       };
    return (
      <div>
        <Helmet>
          <title>Summer Camp || Add Course</title>
        </Helmet>
        <SectionTitle title="Admit Student Form" subTitle="" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              for="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              PhotoUrl
            </label>
            <input
              type="text"
              id="image"
              name="image"
              {...register("image", { required: true })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your PhotoUrl"
              required
            />
            {errors.image && <span>This field is required</span>}
          </div>
          <div className="mb-4">
            <label
              for="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="mb-4">
            <label
              for="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-4">
            <label
              for="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Yoga Name
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: true })}
              name="subject"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Yoga Name"
              required
            />
            {errors.subject && <span>This field is required</span>}
          </div>
          <div className="mb-4">
            <label
              for="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              name="price"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your Yoga Monthly Fee"
              required
            />
            {errors.price && <span>This field is required</span>}
          </div>
          <div className="mb-4">
            <label
              for="seats"
              className="block text-gray-700 font-semibold mb-2"
            >
              Seats
            </label>
            <input
              type="number"
              id="seats"
              {...register("seats", { required: true })}
              name="seats"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="How Many Seats"
              required
            />
            {errors.seats && <span>This field is required</span>}
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddCourse;