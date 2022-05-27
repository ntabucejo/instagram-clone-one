interface IProps {
  children: React.ReactNode
  blacked?: boolean
}

const Button = ({ children, blacked = false }: IProps) => {
  return (
    <button className={`text-xs text-blue-500 font-semibold ${blacked ? 'text-black' : 'text-blue-500'}`}>
      {children}
    </button>
  )
}

export default Button
