import React from "react";
import { Link } from "react-router-dom";
/*
To add more blog pages for future reference

Create a new file in src/BlogPages with the name of blog post
Add the title, date, link, summary, and tags to the articles array in src/Pages/Blog.jsx
Add the new blog post Page to the blogRoutes object in src/App.jsx
Example:
import NewBlogPost from "./BlogPages/NewBlogPost";
const blogRoutes = {
  "first-post": FirstPost,
  "exploring-react-hooks": ExploringReactHooks,
  "new-blog-post": NewBlogPost, // Add your new blog post here
};

*/

const articles = [
  {
    title: "My first blog post",
    date: "July 30, 2025",
    link: "first-post",
    summary: "This is a brief summary of my first blog post.",
    tags: ["introduction", "blogging"],
  },
  {
    title: "Time is Money, Don't Waste It",
    date: "July 31, 2025",
    link: "second-post",
    summary:
      "My growth mindset on the value of time in software development and how to optimize it.",
    tags: ["compensation", "developer-mindset", "developer-growth"],
  },
  {
    title: "Exploring React Hooks",
    date: "July 15, 2025",
    link: "exploring-react-hooks",
    summary:
      "FILLER atm: A deep dive into React Hooks and how they can simplify state management.",
  },
];

const Blog = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-200 shadow-md p-4 flex justify-between items-center">
        <div className="flex-1 text-2xl font-bold">Blogs</div>
        <div className="flex-none">
          <Link to="/" className="btn btn-primary text-white font-semibold">
            Back to Home
          </Link>
        </div>
      </div>
      {/* Blog Content */}
      <div className="container mx-auto w-full ">
        <header className="text-center p-4">
          <h1 className="text-3xl font-bold mb-2">Welcome to my blog!</h1>
          <p>Here you'll find articles on various topics.</p>
        </header>
        <section className="text-center p-4">
          <p>I need a job! PLEASE 🥺😭</p>
          <div className="flex justify-center m-4">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmsxODU0anFsdHhjcDBheGxybTR3MGZkbjhmY3R5c29vZXZ2YTFoeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tUXZ4agVs3J2kKTvH4/giphy.gif"
              alt="No Money GIF"
              className="w-32 h-32"
            />
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmsxODU0anFsdHhjcDBheGxybTR3MGZkbjhmY3R5c29vZXZ2YTFoeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/I20kJbiLC9esGr4mi6/giphy.gif"
              alt="I need a job offer GIF"
              className="w-32 h-32"
            />
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXVveG84a3g1ZThsdnhldXptN3BwZTF2M3FwbmU0eGR1YmpjMHllZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/70md9UQIlQ5V5RE8T7/giphy.gif"
              alt="I just want to learn GIF"
              className="w-32 h-32"
            />
          </div>
        </section>
        <main className="p-4 space-y-6">
          {articles.map((article) => (
            <article key={article.link} className="space-y-2 p-4 border-b">
              <h2 className="text-2xl font-semibold">
                <Link
                  to={`/blog/${article.link}`}
                  className="text-primary hover:underline"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500">{article.date}</p>
              <p>{article.summary}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {article.tags &&
                  article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-outline badge-primary"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </article>
          ))}
        </main>
      </div>
    </>
  );
};

export default Blog;
