import { useState } from "react"

const DateCounter = () => {
  const [steps, setSteps] = useState<number>(1)
  const [counter, setCounter] = useState<number>(0)

  const date: Date = new Date()
  date.setDate(date.getDate() + counter)

  const decrementSteps = () => {
    if (steps > 0) {
      setSteps(steps - 1)
    }
  }

  return (
    <div className="steps">
      <div className="buttons">
        <button onClick={decrementSteps}>-</button>
        <p>steps: {steps}</p>
        <button onClick={() => setSteps((steps) => steps + 1)}>+</button>
      </div>
      <div className="buttons">
        <button onClick={() => setCounter((counter) => counter - steps)}>
          -
        </button>
        <p>counter: {counter}</p>
        <button onClick={() => setCounter((counter) => counter + steps)}>
          +
        </button>
      </div>
      <p style={{ textAlign: "center" }}>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  )
}

export default DateCounter
