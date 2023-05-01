import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import NewPost from "./screens/NewWord";
import PostPage from "./screens/WordPage";
import About from "./screens/About";
import Missing from "./screens/Missing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { posts, setPostsAndSave } = useLocalStorage() || [];
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts?.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults?.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPostsAndSave(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPostsAndSave(postsList);
    navigate("/");
  };

  return (
    <div className="flex flex-col mx-4 md:mx-8 lg:mx-16 h-screen">
      <Header title="📚 My Dictionary" search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />

        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
