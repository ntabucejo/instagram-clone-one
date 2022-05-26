interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return (
    <main className="bg-gray-200">
      <div>{children}</div>
    </main>
  )
}

export default Main
