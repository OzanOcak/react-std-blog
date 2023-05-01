import Feed from "../components/Feed";

const Home = ({ posts, search, setSearch }) => {
  return (
    <main className="flex-grow">
      <div className="word-list">
        {posts?.length ? (
          <Feed posts={posts} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No words to display.</p>
        )}
      </div>
    </main>
  );
};

export default Home;
