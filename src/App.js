import { useState } from 'react'
import './App.css'
import { HiMenu } from 'react-icons/hi'

function App() {
    const [party, setParty] = useState(3)
    const [hour, setHour] = useState('8 p.m.')

    function handleHour(s) {
        let h = parseInt(hour.split(' ')[0])

        if (s === '+') {
            if (h < 12) {
                h += 1
            }
        } else {
            if (h > 6) {
                h -= 1
            }
        }
        setHour(`${h} p.m.`)
        console.log(h)
    }

    return (
        <main className='App'>
            <nav>
                <HiMenu />
            </nav>
            <header>
                <img
                    src='https://bookya.com.au/wp-content/uploads/2022/05/hitesh-dewasi-5JwBbnyZzfc-unsplash-1.jpg'
                    alt=''
                />
            </header>
            <section>
                <h1>Reserve a table</h1>
                <div className='control'>
                    <p>Party size</p>
                    <div className='control'>
                        <button
                            onClick={() => {
                                setParty((prev) => (prev > 1 ? prev - 1 : prev))
                            }}
                        >
                            -
                        </button>
                        <p>
                            {' '}
                            <input style={{ width: '30px' }} type='text' value={party} />{' '}
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
                <div className='control'>
                    <p>Date</p>

                    <input type='date' />
                </div>
                <div className='control'>
                    <p>Hour</p>
                    <div className='control'>
                        <button onClick={() => handleHour('-')}>-</button>
                        <p>
                            {' '}
                            <input style={{ width: '50px' }} type='text' value={hour} />{' '}
                        </p>
                        <button onClick={() => handleHour('+')}>+</button>
                    </div>
                </div>
                <div className='control-button'>
                    <button className='confirm'>Confirm</button>
                </div>
            </section>
        </main>
    )
}

export default App
