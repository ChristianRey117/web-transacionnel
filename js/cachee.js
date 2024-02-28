document.getElementById("film-questionnaire").addEventListener('submit', (e)=>{
    e.preventDefault();
    const formDataQuestionnaire = new FormData(e.target);
    const formValues = Object.fromEntries(formDataQuestionnaire);
    const dateToday = new Date(Date.now());
    const jsonObject = {
        title: formValues.Titre,
        author: formValues.Author,
        content: formValues.Contenu,
        date: dateToday.toLocaleDateString()
    }

    showModalConfirmation(jsonObject);
    

});

const showModalConfirmation = (object)=>{
    $( function() {
        $( "#dialog-confirm" ).dialog({
          resizable: false,
          height: "auto",
          width: 400,
          modal: true,
          buttons: {
            "Envoyer": function() {
                fetch('http://localhost:3000/post',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(object)
                }).then(response => response.json()).then(()=>{
                    window.location.href = "http://127.0.0.1:5501/index.html";
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

