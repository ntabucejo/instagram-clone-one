interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return (
    <main className="bg-gray-200">
      <div className="max-w-4xl mx-auto">{children}</div>
    </main>
  )
}

export default Main
