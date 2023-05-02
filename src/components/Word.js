import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="">
      <article className="mx-[0.5rem] sm:mx-[5rem] bg-gray-100 hover:bg-gray-300 lg:mx-[10rem] xl:mx-[20rem] px-[1rem] sm:px-[2rem] lg:px-[4rem] border border-1 rounded-lg gap-2 my-2">
        <div className="flex justify-between ">
          <h2 className="font-bold ">{post.title}</h2>
          <p className="text-xs text-gray-500/70">{post.datetime}</p>
        </div>
        <p className="text-sm">
          {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
        </p>
      </article>
    </Link>
  );
};

export default Post;
