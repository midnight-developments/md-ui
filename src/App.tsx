import { useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Welcome to React</h1>
            <p>This is your root component (`App.tsx`).</p>

            <button onClick={() => setCount((prev) => prev + 1)}>
                Count is: {count}
            </button>
        </main>
    )
}