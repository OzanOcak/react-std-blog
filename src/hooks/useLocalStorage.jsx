import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todo_list";

export default function useLocalStorage() {
  const [posts, setPosts] = useState([
    {
      id: 21,
      title: "ask somebody out",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "inivite on a date",
    },
    {
      id: 22,
      title: "ask around",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "ask many people the same question",
    },
    {
      id: 23,
      title: "add up to something",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "sum up, equal",
    },
    {
      id: 24,
      title: "back something up",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "withdraw, reverse",
    },
    {
      id: 25,
      title: "break down",
      datetime: "July 03, 2021 11:17:36 AM",
      body: "stop functioning",
    },
    {
      id: 26,
      title: "break in",
      datetime: "July 04, 2021 11:17:36 AM",
      body: "interrupt",
    },
    {
      id: 27,
      title: "blow up",
      datetime: "July 05, 2021 11:17:36 AM",
      body: "explode",
    },
    {
      id: 28,
      title: "back somebody up",
      datetime: "July 06, 2021 11:17:36 AM",
      body: "stand with, support",
    },
  ]);

  function loadSavedposts() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }

  function setPostsAndSave(newposts) {
    setPosts(newposts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newposts));
  }

  useEffect(() => {
    loadSavedposts();
  }, []);

  return { posts, setPostsAndSave };
}
