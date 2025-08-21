"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
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

export default function BlogDetails() {
  const params = useParams();
  const blogId = parseInt(params.id);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <h2 className="text-center my-5">Blog not found!</h2>;
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-4 d-flex align-items-center" >
        <Image
          src={blog.image}
          alt={blog.title}
          width={900}
          height={200}
          className="img-fluid rounded"
          style={{ objectFit: "cover" }}
        />
        <h1 className="mt-4 text-center">{blog.title}</h1>
        <p className="text-muted text-center">
          By {blog.author} • {blog.date}
        </p>
        <div className="d-flex justify-content-center">
        <p className="w-50 text-center">{blog.description}</p>
        </div>
        <div className="text-center" >
          {blog.tags.map((tag, i) => (
            <span key={i} className="badge bg-primary me-2">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
