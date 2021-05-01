import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import blogsInfo from '../../blogs_Fake.json';
import SingleBlog from './SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        setBlogs(blogsInfo)        
    },[])
    return (
        <div className="container mt-4">
            <h2 className='text-center'>Blogs</h2>
            <div className="row mt-3">
                {
                    blogs.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Blogs;