import React from "react";
import "./Blogs.css";

const Blogs = () => {
  const blogs = [
    {
      title: "How AI is Revolutionizing Document Management for Enterprises",
      date: "24 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    },
    {
      title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
      date: "24 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    },
    {
      title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
      date: "24 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    }
  ];

  return (
    <section className="blogs-section">
      <div className="blogs-heading">
        <h2>Blogs</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="blogs-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card-wrapper" key={index}>
            <div className="blog-card">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="blogs-navigation">
     </div>
    </section>
  );
};

export default Blogs;
