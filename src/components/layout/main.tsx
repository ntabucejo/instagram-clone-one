interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return (
    <main>
      <div className="max-w-3xl mx-auto lg:flex lg:gap-5">{children}</div>
    </main>
  )
}

export default Main
