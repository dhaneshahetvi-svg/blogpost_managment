import React from "react";
import Navbar from "../component/Navbar";
import { FaPlus } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <main className="dashboard-main">
        {/* Welcome Section */}
        <div className="dashboard-welcome">
          <div className="welcome-text">
            
            <p>
              Manage your posts, track engagement, and connect with your audience
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="dashboard-cards">
          <div className="dash-card">
            <h3>Total Posts</h3>
            <span className="dash-number">10</span>
          </div>

          <div className="dash-card">
            <h3>Your Stories</h3>
            <span className="dash-number">5</span>
          </div>

          <div className="dash-card">
            <h3>Community Posts</h3>
            <span className="dash-number">10</span>
          </div>
        </div>

        {/* Posts Section */}
        <section className="posts-section">
          <div className="section-header">
            <h2 className="section-title">Recent Feed</h2>
            <button className="create-shortcut-btn">
              <FaPlus /> New Post
            </button>
          </div>

          <div className="posts-grid">
            {/* Post Card 1 */}
            <div className="post-card">
              <div className="post-image-container">
                <img
                  src="https://via.placeholder.com/300"
                  alt="post"
                  className="post-card-image"
                />

                <div className="post-actions">
                  <button className="action-btn edit-btn">
                    <MdEdit size={22} />
                  </button>
                  <button className="action-btn delete-btn">
                    <MdDelete size={22} />
                  </button>
                </div>
              </div>

              <div className="post-card-content">
                <div className="post-meta">
                  <span className="post-author">by Admin</span>
                  <span className="post-date">Recent</span>
                </div>

                <h3 className="post-card-title">Sample Post Title</h3>

                <p className="post-card-description">
                  This is a static description to maintain the dashboard layout.
                </p>

                <button className="read-more-btn">Read More</button>
              </div>
            </div>

            {/* Post Card 2 */}
            <div className="post-card">
              <div className="post-image-container">
                <img
                  src="https://via.placeholder.com/300"
                  alt="post"
                  className="post-card-image"
                />

                <div className="post-actions">
                  <button className="action-btn edit-btn">
                    <MdEdit size={22} />
                  </button>
                  <button className="action-btn delete-btn">
                    <MdDelete size={22} />
                  </button>
                </div>
              </div>

              <div className="post-card-content">
                <div className="post-meta">
                  <span className="post-author">by User</span>
                  <span className="post-date">Recent</span>
                </div>

                <h3 className="post-card-title">Another Static Post</h3>

                <p className="post-card-description">
                  Static content example to keep dashboard style intact.
                </p>

                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
