import Navbar from "./Navbar";
const Form = ({posts}) => {
    return (
        <>
        <Navbar />
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label for="postTitle" className="form-label">Title</label>
                        <input type="email" value={posts[0].title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="postDescription" className="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="postAuthor" className="form-label">Author</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                    <label for="postCategory" className="form-label">Category</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Categories</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1"></label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Güncelle</button>
                    </form>
            </div>
        </>
    );
}

export default Form
