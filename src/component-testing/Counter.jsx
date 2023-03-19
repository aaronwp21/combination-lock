import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p data-testid="number-display">{count}</p>
      <div>
        <button data-testid="plus-button" onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </>
  )
}

export default Counter