interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  )
}

export default Main
