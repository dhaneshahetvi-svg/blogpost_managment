import React from 'react'
import Navbar from '../component/Navbar'
import { MdDelete, MdDeleteSweep, MdOpenInNew } from 'react-icons/md'
import { FaRegStar } from 'react-icons/fa'
import './Favorites.css'

const Favorites = () => {
  return (
    <div className='favorites-page-contain'>
        <Navbar />

        <main className='favorites-main'>
            <div className='favorites-hero'>
                <div className='hero-shape'></div>
                <div className='hero-content'>
                    <h1>Your Reading List</h1>
                    <p>Enjoy the collection of Stories you've curated.</p>
                </div>
            </div>

            <div className='favorites-content'>

                <div className='favorites-header'>
                    <h2>
                        Curated Collection
                        <span className='count-badge'>3</span>
                    </h2>

                    <button className='clear-all-btn'>
                        <MdDeleteSweep size={20} /> Clear List
                    </button>
                </div>

                {/* Empty state UI */}
                <div className='fav-empty-state'>
                    <div className='empty-icon-wrapper'>
                        <FaRegStar className='empty-icon' />
                    </div>
                    <h3>Your list is empty</h3>
                    <p>Discover interesting posts and save them to read later</p>
                    <button className='browse-btn'>
                        Explore Stories
                    </button>
                </div>

                {/* static cards */}
                <div className='favorites-grid'>
                     {/* card 1 */}

                     <div className='fav-card'>
                        <div className='fav-card-image'>
                            <img 
                            src=''
                            alt='Post'
                            />
                            <div className='fav-card-overlay'>
                                <button className='read-btn'>
                                <MdOpenInNew /> Read Article
                                </button>
                            </div>
                        </div>

                        <div className='fav-card-body'>
                            <div className='fav-meta'>
                                <span className='fav-author'>Author Name</span>
                                <span className='fav-date'>Recent</span>
                            </div>

                            <h3 className='fav-title'>Sample post Title</h3>

                            <p className='fav-excerpt'>
                                This is a sample description of the post used only
                            </p>

                            <button className='remove-fav-btn'>
                                Remove
                            </button>
                        </div>
                     </div>
                      
                </div>

            </div>
        </main>
      
    </div>
  )
}

export default Favorites
