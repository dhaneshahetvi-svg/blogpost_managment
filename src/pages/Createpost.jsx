import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Createpost.css";

const Createpost = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // get post id for edit mode

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);

  /* =========================
     FETCH POST (EDIT MODE)
  ========================== */
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            title: data.title || "",
            description: data.description || "",
            author: data.author || "",
            imageUrl: data.imageUrl || "",
          });
        })
        .catch(() => {
          toast.error("Failed to load post");
        });
    }
  }, [id]);

  /* =========================
     HANDLE INPUT CHANGE
  ========================== */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* =========================
     SUBMIT HANDLER
  ========================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.author ||
      !formData.imageUrl
    ) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        id
          ? `http://localhost:3000/posts/${id}` // EDIT
          : "http://localhost:3000/posts", // CREATE
        {
          method: id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            createdAt: id ? undefined : new Date(),
          }),
        }
      );

      if (!response.ok) throw new Error("Failed");

      toast.success(id ? "Post Updated Successfully" : "Post Created Successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post-page">
      <Navbar />

      <div className="create-post-container">
        <h1>{id ? "Edit Post" : "Create New Post"}</h1>

        <form className="create-post-form" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="form-group">
            <label>Post Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter post title"
            />
          </div>

          {/* Author */}
          <div className="form-group">
            <label>Author Name</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
            />
          </div>

          {/* Image URL */}
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Paste image URL"
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write post description"
              rows="5"
            />
          </div>

          {/* Submit Button */}
          <button className="submit-btn" disabled={loading}>
            {loading ? "Saving..." : id ? "Update Post" : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
