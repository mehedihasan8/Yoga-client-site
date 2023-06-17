import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="px-8">
      <div className="mx-auto mt-10 grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-2">
        {blogs.map((blog) => (
          <div key={blog.id} className=" mb-4 md:flex items-center gap-4">
            <div className="mx-auto  flex-grow ">
              <img src={blog.image} alt={blog.name} className="w-[950px]" />
            </div>
            <div>
              <p className="text-gray-400 mt-4 md:mt-0 ">
                {" "}
                {blog.date} <span className="ml-4">{blog.isAdmin}</span>
              </p>
              <h3 className=" font-semibold my-2 ">{blog.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{blog.details} okay</p>
              <button className="btn btn-accent btn-xs border-0 text-white bg-[#6144FF]">
                learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
