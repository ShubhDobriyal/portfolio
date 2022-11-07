import { FiArrowRight } from "react-icons/fi";

const BlogItem = ({ postData }) => {
  return (
    <div className="flex flex-col justify-between bg-cardBgColor text-textGray p-8 rounded-lg tracking-wider mb-8 md:mb-0">
      <div>
        <h5 className="text-white">{postData.title}</h5>
        <p className="text-xs text-dimGray">{postData.published_on}</p>
        <p className="mt-6">{postData.desc}</p>
      </div>
      <a
        className="mt-6 flex items-center justify-end underline text-md font-medium text-accent font-mohave"
        href={postData.link}
      >
        Read More <FiArrowRight />
      </a>
    </div>
  );
};
export default BlogItem;
