const Post = ({ key, imageUrl, title, author, description }) => {
    return (
        <div key={key} className="card col-sm-6" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="Url" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                <p className="card-text">{description}</p>
                <a href="#asd" className="btn btn-primary">Posta Git</a>
            </div>
        </div>
    )
}



export default Post
