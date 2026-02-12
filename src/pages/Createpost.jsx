import React from 'react'
import Navbar from '../Component/Navbar'
import { FaCloudUploadAlt, FaHeading, FaRegPaperPlane, FaTimes, FaUser } from 'react-icons/fa'
import "./Createpost.css";

const Createpost = () => {
  return (
    <div className='create-post-page'>
        <Navbar/>
        <div className='create-post-container'>
            <header className='form-header'>
                <h1>Create New post</h1>
                <p>Share your thoughts and Stories with the world</p>
            </header>
            <div className='post-form-card'>
                <form>
                    <div className='form-group'>
                        <label>post Title</label>
                        <div className='input-wrappr'>
                            <FaHeading className='input-icon' />
                            <input
                            type='text'
                            name='title'
                            className='form-control'
                            placeholder='Enter a catchy title...'
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <lable>Author Name</lable>
                        <div className='input-wrapper'>
                            <FaUser className='input-icon'/>
                            <input
                             type='text'
                            name='author'
                            className='form-control'
                            placeholder='Your name'
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <lable>Description</lable>
                        <textarea
                        name='description'
                        className='form-control'
                        placeholder='what on your mind? write your stroy here'></textarea>
                    </div>
                    <div className='form-group'>
                        <lable>Cover image</lable>

                        <div className='image-source-tabs'>
                            <button type='button' className='tab-btn active'>
                                Image URL
                            </button>

                            <button type='button' className='tab-btn'>
                                Upload File
                            </button>
                        </div>

                        <div className='input-wrapper'>
                            <FaLink className='input-icon'/>
                            <input
                            type='url'
                            name='imageur1'
                            className='form-control'
                            placeholder='paste image URL (e.g. https://...)'
                            />
                        </div>

                        <div className='image-upload-area'>
                            <FaCloudUploadAlt className='upload-icon'/>
                            <p>click to upload image form your device</p>
                        </div>

                        <div className='image-preview-container'>
                            <img
                            src=''
                            alt='Preview'
                            className='image-preview'
                            />
                            <button type='button' className='remove-image-btn'>
                                <FaTimes/>
                            </button>
                        </div>
                    </div>
                    <div className='form-actions-row'>
                        <button type='sumbit' className='sumbit-btn'>
                            <FaRegPaperPlane/> publish post
                        </button>

                        <button type='button' className='cancel-btn'>
                            Clear <Form></Form>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Createpost;
