import React, { useEffect, useState } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'
function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                console.log(
                    'snapshot',
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* <Post
                profilePic="https://vcdn-sohoa.vnecdn.net/2021/02/16/v2-4f48da9ef042a1915ebfedd0682-6733-6243-1613447924.jpg"
                message="New iphone"
                timestamp="just now"
                username="Ky Nguyen"
                image="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/AnhNQ/iphone-12-tim-6.JPG"
            /> */}
        </div>
    )
}

export default Feed
