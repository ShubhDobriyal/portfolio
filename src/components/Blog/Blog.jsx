import { FiArrowRight } from "react-icons/fi";
import { blogs } from "../../data/data";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <section id="blogs" className="container mt-16">
      <h5 className="mb-8 line-before">Blog</h5>
      <div className="md:flex justify-between gap-6">
        {blogs.map((blog) => {
          return <BlogItem postData={blog} key={blog.id} />;
        })}
      </div>
      <div>
        <a
          className="mt-16 flex items-center justify-center underline text-md font-medium text-accent font-mohave"
          href="/"
        >
          View All <FiArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Blog;
