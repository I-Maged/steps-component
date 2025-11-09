import type { FC } from "react"

type ButtonProps = {
  textColor: string
  bgColor: string
  onClick: () => void
  children: React.ReactNode
}
const Button: FC<ButtonProps> = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
