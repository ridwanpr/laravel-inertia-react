const Show = ({ post }) => {
    return (
        <div>
            <h1 className="title">Post</h1>
            <div className="text-sm text-slate-600">
                <span>Posted on: </span>
                <span>{new Date(post.created_at).toTimeString()}</span>
            </div>
            <p>{post.body}</p>
        </div>
    );
};

export default Show;
