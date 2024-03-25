const App = ()=>{
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    console.log('id--->', id);
    return <div className="container">
        <BlogDetails id={id}></BlogDetails>
    </div>
}

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<div>
    <Header/>
    <App></App>
    <Footer></Footer>
    </div>);