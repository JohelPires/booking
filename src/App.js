import { useState } from 'react'
import './App.css'

function App() {
    const [party, setParty] = useState(3)

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
                        <button
                            onClick={() => {
                                setParty((prev) => (prev > 1 ? prev - 1 : prev))
                            }}
                        >
                            -
                        </button>
                        <p>
                            {' '}
                            <input style={{ width: '30px' }} type="text" value={party} />{' '}
                        </p>
                        <button
                            onClick={() => {
                                setParty((prev) => (prev < 30 ? prev + 1 : prev))
                            }}
                        >
                            +
                        </button>
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
                <div className="control">
                    <button style={{ margin: 'auto' }}>Confirm</button>
                </div>
            </section>
        </main>
    )
}

export default App
