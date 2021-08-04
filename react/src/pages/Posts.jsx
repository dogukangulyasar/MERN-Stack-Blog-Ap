import Post from "../components/Post";
import Navbar from "../components/Navbar";
const Home = ({ posts }) => {
    return (
        <>
            < Navbar />
            <div className="container row justify-content-center">

                {
                    posts.map((post, i) => {
                        return <Post key={post.id} imageUrl={post.imageUrl} title={post.title} author={post.author} description={post.description} />
                    })
                }
            </div >
        </>
    )
}

export default Home
