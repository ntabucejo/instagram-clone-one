import Header from './header'
import Main from './main'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
