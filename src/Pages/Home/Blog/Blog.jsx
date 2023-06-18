import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const slicedBlogs = blogs.slice(0, 3);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  console.log(blogs);
  return (
    <>
      <h1
        data-aos="fade-down"
        data-aos-duration="3000"
        className="text-4xl font-bold text-[#6144FF] text-center my-16"
      >
        Latest Posts & Articles
      </h1>
      <div className="mx-auto mt-10 grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0">
        {slicedBlogs.map((blog) => (
          <div data-aos="zoom-in-up" key={blog.id} className=" mb-4">
            <div className="mx-auto h-[20rem] mb-4 ">
              <img
                src={blog.image}
                alt={blog.name}
                className="w-full  h-[20rem] "
              />
            </div>
            <p className="text-gray-400">
              {" "}
              {blog.date} <span className="ml-4">{blog.isAdmin}</span>
            </p>
            <h3 className=" font-semibold my-4">{blog.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{blog.details} okay</p>
          </div>
        ))}
      </div>
      <div data-aos="fade-down" className="flex justify-center my-4">
        <Link to="/blogs">
          {" "}
          <button className="btn btn-accent  border-0 text-white bg-[#6144FF]">
            See More Blog
          </button>
        </Link>
      </div>
    </>
  );
};

export default Blog;
