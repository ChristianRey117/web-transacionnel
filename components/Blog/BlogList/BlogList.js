function BlogList(){
    const [posts, setPosts] = React.useState([{},{}]);
    React.useEffect(()=>{
        getPost();
    }, []);

    const getPost = async()=>{
        await fetch("http://localhost:3000/post").then(data=> data.json()).then(response=>{
            setPosts(response);
        })
    }
    return <div className="row mt-3" id="card">
        {posts.map(card=>{
            return <BlogCard title={card.title} author={card.author} content={card.content} date={card.date} id={card.id}></BlogCard>
        })}

    </div>

}