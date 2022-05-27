interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return (
    <main>
      <div className="max-w-3xl mx-auto lg:flex relative">{children}</div>
    </main>
  )
}

export default Main
