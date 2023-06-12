import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const image_bb_token = "654b1e85ae0488c966b1aaf034e8cab2";

const AddClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  // console.log(image_bb_token, user);
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_bb_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const fromData = new FormData();
    // console.log(data);

    fromData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((img) => {
        if (img.success) {
          const imgURL = img.data.display_url;
          const { name, price, ClassName, seats, email } = data;
          const addClasses = {
            instructorName: name,
            price,
            yogaName: ClassName,
            availableSeats: seats,
            email,
            image: imgURL,
            status: "pending",
          };

          // console.log(addClasses);

          axiosSecure.post("/addclass", addClasses).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire(
                "Class Add Successfuly!",
                "You clicked the button!",
                "success"
              );
              // console.log("add item data", res.data);
            }
          });
        }
      });
    // console.log(data);
  };
  // console.log(errors);
  return (
    <div className="w-full mt-6 px-6">
      <Helmet title="YOGA | Add Class"></Helmet>
      <h1 className="text-4xl font-bold text-center text-[#3173DE] lg:mb-10 mt-16">
        Please add class{" "}
      </h1>

      <div className="bg-[#F3F3F3] px-6 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Header /> */}
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Class name*</span>
            </label>
            <input
              type="text"
              placeholder="Class name"
              {...register("ClassName", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex w-full gap-x-3">
            <div className="form-control w-2/4 ">
              <label className="label">
                <span className="label-text">Available seats*</span>
              </label>
              <input
                type="number"
                placeholder="Available seats"
                {...register("seats", { required: true, valueAsNumber: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Price *</span>
              </label>
              <input
                type="number"
                placeholder="Price "
                {...register("price", {
                  required: true,
                  valueAsNumber: true,
                })}
                className="input input-bordered min-w-max"
              />
            </div>
          </div>
          <div className="flex w-full gap-x-3">
            <div className="form-control w-2/4 ">
              <label className="label">
                <span className="label-text">Instractor Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Instracor Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                {...register("email", { required: true })}
                className="input input-bordered min-w-max"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Chose Your Class Picture *</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true, maxLength: 120 })}
                className="file-input file-input-ghost w-full  broder border-[#2e4bc1] "
              />
            </div>

            <input
              className="btn btn-primary bg-[#3173DE] my-6"
              type="submit"
              value="Add items "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
