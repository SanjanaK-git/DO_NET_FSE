import React from "react";

function BlogDetails() {

  const blogs = [
    { id: 1, title: "React Tutorial" },
    { id: 2, title: "ES6 Features" },
    { id: 3, title: "JavaScript Events" }
  ];

  const isAvailable = true;

  return (
    <div>

      <h2>Blog Details</h2>

      {
        isAvailable &&
        blogs.map(blog => (
          <p key={blog.id}>
            {blog.title}
          </p>
        ))
      }

    </div>
  );
}

export default BlogDetails;
