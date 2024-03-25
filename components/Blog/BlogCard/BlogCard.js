function BlogCard({title, author, date, content, id}){
    const goToBlogDetails = "http://127.0.0.1:5501/components/Blog/Blog.html?id="+id;
    return <div className='col-lg-4 col-sm-12 col-md-12 col-card' style={{marginTop: '5%'}}>
        <div className='card' style={{width: '20rem', maxHeight: '32rem'}}>
        <div className='row image'>
        <img src='images/Landscape-Color.jpg' alt='...'/>
        </div><div className='card-body'>
        <div className=' row card-title'>
        <h5 name='title-card'>{title}</h5>
        </div><div className='row'><div className='col-4'>
        <p name='date'>Date: {date}</p></div><div className='col-8'><p name='author'>Author: {author}</p></div></div>
        <p className='card-text'>{content}</p>
        <a href={goToBlogDetails}>Aller</a>
        </div>
        </div>
        </div>
}