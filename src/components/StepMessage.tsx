import type { FC } from "react"

type StepMessageProps = {
  step: number
  children: React.ReactNode
}

const StepMessage: FC<StepMessageProps> = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  )
}

export default StepMessage
