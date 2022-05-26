import Header from './header'
import Main from './main'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div className='min-h-screen grid grid-rows-[auto,1fr] gap-5'>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
