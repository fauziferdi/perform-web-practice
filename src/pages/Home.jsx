import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const perfectBlog = () => {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = "/blog/1";
    document.head.appendChild(link);
    console.log("prefetching");
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="blog/1" onMouseOver={perfectBlog}>
        Blog
      </Link>
    </>
  );
}
