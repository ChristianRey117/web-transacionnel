const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const getPost = async ()=>{
    let _fetch = await fetch("http://localhost:3000/post/"+id);
    return await _fetch.json();
}

const showPost = async()=>{
    const post = await getPost();
    const title = document.getElementById('title');
    const content = document.getElementById("content");
    const date = document.getElementById("date");
    const author = document.getElementById("author");
    
    title.innerText = post.title;
    content.innerText = post.content;
    date.innerText = "Date: " +post.date;
    author.innerText = "Author: " + post.author;
}

const getComments = async()=>{
    let _fetch = await fetch("http://localhost:3000/comments?id_publication="+ id);
    return await _fetch.json();
}

const showComments = async()=>{
    comments = await getComments();
    comments.forEach(comment => {
        let htmlComment = `
        <div class="row">
        <div class="col-3" style=" text-align: center;">
            <div class='row'>
                <div class='col-12'>
                 <img src="images/user.png" alt="" style="width: 60%;">
                </div>
                <div class='col-12 mt-2'>
                    <p>Date: ${comment.date}</p>
                </div>
            </div>
        </div>

        <div class="col-9 mt-2" >
            <p>${comment.content}</p>
        </div>

       
    </div>
        `;

    $('#section-comments').append(htmlComment);

    });
}

const postComment = ()=>{
    const textArea = document.getElementById('text-area-comment');
    const dateToday = new Date(Date.now());
    console.log(textArea.value);

    const objJson = {
        id_publication: id,
        content: textArea.value,
        date: dateToday.toLocaleDateString()
    }

    showModalConfirmation(objJson);
}

const showModalConfirmation = (object)=>{
    console.log(object);
    $( function() {
        $( "#dialog-confirm" ).dialog({
          resizable: false,
          height: "auto",
          width: 500,
          modal: true,
          buttons: {
            "Envoyer": function() {
                fetch('http://localhost:3000/comments',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(object)
                }).then(response => response.json()).then(()=>{
                });
              $( this ).dialog( "close" );
            },
            Cancel: function() {
              $( this ).dialog( "close" );
            }
          }
        });
      } );
}

showPost();
showComments();