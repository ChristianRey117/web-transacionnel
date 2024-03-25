function BlogDetails({id}){
    const [blog, setBlog] = React.useState({});

    React.useEffect(()=>{
        getPost();
    }, []);

    const getPost = async()=>{
        await fetch("http://localhost:3000/post/" + id).then(data=> data.json()).then(response=>{
            setBlog(response);
        })
    };
    return <div className="container" style={{marginTop: '2rem'}}>
        <div className="row" style={{textAlign: 'center'}}>
            <div className="col-12">
                <h1 id="title">{blog.title}</h1>
            </div>

            <div className="col-12" style={{marginTop: '2rem' }}>
                <img src="../../../images/Landscape-Color.jpg" alt="" style={{maxWidth: '600px'}}/>
            </div>

            <div className="col-12" style={{marginTop: '2rem'}}>
                <div className="row">
                    <div className="col-6" style={{textAlign: 'end'}}>
                        <p id="date">Date: {blog.date}</p>
                    </div>

                    <div className="col-6" style={{textAlign: 'start'}}>
                        <p id="author">Author: {blog.author}</p>
                    </div>
                </div>
            </div>

            <div className="col-12" style={{textAlign: 'start', marginTop: '2rem'}}>
                <p id="content">{blog.content}</p>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-12">
                <h4>Commentaires</h4>
            </div>
            <div className="col-12 mt-3" id="section-comments">
                {<CommentList id={id}></CommentList>}
            </div>
        </div>

        <div className="row mt-5">
            {<AddComment id={id}></AddComment>}
        </div>
    </div>
}