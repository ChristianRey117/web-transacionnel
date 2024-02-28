const getPosts = async ()=>{
   let _fetch = await fetch("http://localhost:3000/post");
   return await _fetch.json();
 
}


const goToPage = (id)=>{
    console.log(id);
}

const renderCards = async()=>{
    const posts = await getPosts();
    posts.forEach(post => {
    let cardHtml = `<div class='col-lg-4 col-sm-12 col-md-12 col-card'>
    <div class='card' style='width: 18rem;'>
    <div class='row image'>
    <img src='images/Landscape-Color.jpg' alt='...'>
    </div><div class='card-body'>
    <div class=' row card-title'>
    <h5 name='title-card'>${post.title}</h5>
    </div><div class='row'><div class='col-4'>
    <p name='date'>Date: ${post.date}</p></div><div class='col-8'><p name='author'>Author: ${post.author}</p></div></div>
    <p class='card-text'>${post.content}</p>
    <button class='btn btn-primary'><a href='http://127.0.0.1:5501/blog.html?id=${post.id}'>Aller</a></button>
    </div>
    </div>
    </div>`
        $('#cards').append(cardHtml);
    });
}

renderCards();