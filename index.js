const App = ()=>{
    return <div className="container">
        <BlogList></BlogList>
    </div>
}

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<div>
    <Header/>
    <App></App>
    <Footer></Footer>
    </div>);