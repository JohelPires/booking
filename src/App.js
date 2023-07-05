import './App.css'

function App() {
    return (
        <main className="App">
            <nav>menu</nav>
            <header>
                <img
                    src="https://bookya.com.au/wp-content/uploads/2022/05/hitesh-dewasi-5JwBbnyZzfc-unsplash-1.jpg"
                    alt=""
                />
            </header>
            <section>
                <h1>Reserve a table</h1>
                <div className="control">
                    <p>Party size</p>
                    <button>-</button>
                    <p>3</p>
                    <button>+</button>
                </div>
            </section>
        </main>
    )
}

export default App
