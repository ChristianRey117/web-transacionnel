function CommentList({id}){
    const [commentaires, setCommentaires] = React.useState([{}]);
    
    React.useEffect(()=>{
        getCommentaires();
    }, []);

    const getCommentaires = async()=>{
        await fetch("http://localhost:3000/comments?id_publication="+ id).then(data=> data.json()).then(response=>{
            setCommentaires(response);
        })
    };

    return commentaires.map(commentFetch =>{
        return <CommentComponent comment={commentFetch}></CommentComponent>
    })
}