interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return (
    <main>
      <div className="max-w-4xl mx-auto space-y-3">{children}</div>
    </main>
  )
}

export default Main
