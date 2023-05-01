import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="mx-[0.5rem] sm:mx-[5rem] lg:mx-[10rem] xl:mx-[20rem] px-[1rem] sm:px-[2rem] lg:px-[4rem] border border-1 rounded-lg gap-2 my-2">
      <Link to={`/post/${post.id}`} className="flex justify-between ">
        <h2 className="font-bold ">{post.title}</h2>
        <p className="text-xs text-gray-500/70">{post.datetime}</p>
      </Link>
      <p className="text-sm">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
