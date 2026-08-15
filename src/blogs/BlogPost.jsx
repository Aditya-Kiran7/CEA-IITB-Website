import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './intern.css'; // shared blog stylesheet (.page-bg, .blog-*, dark theme)
import { getBlog } from '../data/blogs';

// Renders a single content block from a blog's `content` array.
const renderBlock = (block, index) => {
  const [type, payload] = block;
  switch (type) {
    case 'h2':
      return <h2 key={index} className="blog-section-title">{payload}</h2>;
    case 'p':
      return <p key={index}>{payload}</p>;
    case 'quote':
      return <blockquote key={index} className="blog-quote">{payload}</blockquote>;
    case 'ul':
      return (
        <ul key={index} className="blog-list">
          {payload.map((item, i) => (
            <li key={i}>
              {typeof item === 'string' ? item : (<><b>{item.label}</b> {item.text}</>)}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const blog = getBlog(slug);

  // Unknown slug -> send the reader to the blogs listing.
  if (!blog) return <Navigate to="/cea/blogPage" replace />;

  return (
    <div className="page-bg">
      <div className="main-white-container blog-wrapper">
        <h1 className="blog-main-title">{blog.title}</h1>

        <div className="blog-header">
          <img src={blog.authorImage} alt={blog.author} className="blog-author-img" />
          <div>
            <p className="blog-author-name">By {blog.author}</p>
            <p className="blog-date">{blog.date}</p>
          </div>
        </div>

        {blog.heroImage && (
          <img src={blog.heroImage} alt={blog.title} className="blog-hero-img" />
        )}

        <div className="blog-content">
          {blog.content.map(renderBlock)}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
