import React, {useState} from 'react'

const Voter = props => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="voter">
        <p id="triangle-up" onClick={() => setCount(count + 1)}></p>
        <p className="counter">{count}</p>
        <p id="triangle-down" onClick={() => setCount(count - 1)}></p>
      </div>
    </>
  )
}

export default Voter