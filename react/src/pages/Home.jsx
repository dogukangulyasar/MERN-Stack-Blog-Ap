import Navbar from "../components/Navbar"
import {
    Link,
} from 'react-router-dom';
const Home = ({ posts, deletePost }) => {

    return (
        <div>
            <Navbar />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Başlık</th>
                        <th scope="col">Resim</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Islem</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, i) => {
                            return (
                                <tr>
                                    <th scope="row"> {i} </th>
                                    <td> {post.title} </td>
                                    <td> {post.imageUrl} </td>
                                    <td> {post.category} </td>
                                    <td> <Link to={'form/'+post._id}> <button className="btn btn-success">Show</button> </Link> / <button onClick={() => deletePost(post._id)} className="btn btn-danger">Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Home
