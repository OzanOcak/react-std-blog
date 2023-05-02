import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="flex-grow">
      <article className="flex flex-col gap-8 mx-0 sm:mx-8 md:mx-[6rem] lg:mx-[8rem]">
        {post && (
          <>
            <div className="flex justify-between">
              <h2 className="flex gap-4">
                <span className="font-bold">Word:</span>
                {post.title}
              </h2>
              <p className="postDate">{post.datetime}</p>
            </div>
            <p className="flex gap-4">
              {" "}
              <span className="font-bold">Defination:</span>
              {post.body}
            </p>
            <button
              className="left-8 bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-md max-w-[10rem]"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
