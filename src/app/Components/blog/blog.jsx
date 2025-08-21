"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Blog.css";

// Import images
import pic2 from "@/app/Images/blog.png";
import pic4 from "@/app/Images/Banners/banner3.png";
import pic1 from "@/app/Images/Banners/banner4.png";
import pic3 from "@/app/Images/Banners/banner5.png";

const blogs = [
  {
    id: 1,
    title: "How Bulk SMS Can Boost Your Business Sales",
    date: "20 Aug 2024",
    author: "Admin",
    image: pic2,
    description:
      "Bulk SMS is one of the fastest and most affordable ways to reach your target customers. Learn how businesses are using it to increase sales and customer engagement.",
    tags: ["Bulk SMS", "Marketing", "Sales"],
  },
  {
    id: 2,
    title: "OTP SMS Gateway: Secure Your Transactions Instantly",
    date: "18 Aug 2024",
    author: "Admin",
    image: pic3,
    description:
      "OTP SMS helps businesses secure online payments and user verifications. Find out why a fast and reliable OTP gateway is essential for your business.",
    tags: ["OTP SMS", "Security"],
  },
  {
    id: 3,
    title: "Why WhatsApp SMS is the Future of Business Communication",
    date: "16 Aug 2024",
    author: "Admin",
    image: pic1,
    description:
      "WhatsApp SMS is taking over traditional messaging. Learn how you can integrate WhatsApp API into your business and improve customer satisfaction.",
    tags: ["WhatsApp SMS", "Business"],
  },
  {
    id: 4,
    title: "Transactional vs Promotional SMS: Key Differences",
    date: "14 Aug 2024",
    author: "Admin",
    image: pic4,
    description:
      "Understand the difference between transactional and promotional SMS campaigns and how to use them effectively for maximum impact.",
    tags: ["Transactional SMS", "Promotional SMS"],
  },
];

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);
  const router = useRouter();

  const handleRedirect = (id) => {
    router.push(`/Pages/blogs/${id}`);
  };

  return (
    <div className="container sms-blog-section py-5">
      <h2 className="mb-4 fw-bold">Latest Updates on SMS Marketing</h2>
      <div className="row g-4">
        {/* Left Side Main Blog */}
        <div className="col-lg-7">
          <div
            className="card border-0 shadow-sm sms-blog-main"
            onClick={() => handleRedirect(selectedBlog.id)}
            style={{ cursor: "pointer" }}
          >
            <div style={{ width: "100%", height: "300px", position: "relative" }}>
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div className="p-3">
              <p className="text-muted mb-1">
                {selectedBlog.author} • {selectedBlog.date}
              </p>
              <h4 className="fw-bold">{selectedBlog.title}</h4>
              <p className="text-muted">{selectedBlog.description}</p>
              <div className="tags">
                {selectedBlog.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Blog List */}
        <div className="col-lg-5">
          <div className="sms-blog-list">
            {blogs
              .filter((blog) => blog.id !== selectedBlog.id)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="d-flex mb-4 sms-blog-item"
                  onClick={() => setSelectedBlog(blog)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={120}
                    height={80}
                    className="rounded me-3"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <p className="text-muted small mb-1">
                      {blog.author} • {blog.date}
                    </p>
                    <h6 className="fw-bold">{blog.title}</h6>
                    <p className="text-muted small mb-1">
                      {blog.description.slice(0, 70)}...
                    </p>
                    <div className="tags">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="tag-small">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
