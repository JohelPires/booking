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
                    <div className="control">
                        <button>-</button>
                        <p>3</p>
                        <button>+</button>
                    </div>
                </div>
                <div className="control">
                    <p>Date</p>

                    <input type="date" />
                </div>
                <div className="control">
                    <p>Hour</p>

                    <p>3</p>
                </div>
            </section>
        </main>
    )
}

export default App
