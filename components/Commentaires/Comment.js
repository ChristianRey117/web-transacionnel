function CommentComponent({comment}){
    
    return  <div className="row">
    <div className="col-3" style={{textAlign: 'center'}}>
        <div className='row'>
            <div className='col-12'>
             <img src="../../images/user.png" alt="" style={{width: "60%"}}/>
            </div>
            <div className='col-12 mt-2'>
                <p>Date: {comment.date}</p>
            </div>
        </div>
    </div>

    <div className="col-9 mt-2" >
        <p>{comment.content}</p>
    </div>

   
</div>
}