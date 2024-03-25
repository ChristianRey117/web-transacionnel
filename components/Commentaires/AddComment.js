function AddComment({id}){
    const postComment = (e=>{
        e.preventDefault();
        console.log(e.target.comment.value);
        const comment = e.target.comment.value;
        const dateToday = new Date(Date.now());

        fetch('http://localhost:3000/comments',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_publication: id,
                    content: comment,
                    date: dateToday.toLocaleDateString()
                })
                }).then(response => response.json()).then(()=>{
                });

    })
    return <>
        <div className="col-12">
                <h4>Ajoute ton commaintaire</h4>
        </div>

            <div className="col-12">
                <form onSubmit={postComment}>
                    <textarea className="form-control" id="text-area-comment" cols="30" rows="6" name="comment"></textarea>
                
                    <div>
                        <div className="col-12 align-self-end" style={{display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginBottom: '1rem'}}>
                            <button className="btn btn-primary"  type="submit">Submit</button>
                        </div>
                    </div>
                </form>

                
            </div>

            
    </>
}