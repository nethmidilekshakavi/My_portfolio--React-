import { Outlet } from "react-router-dom"
import Portfolio from "./PortfolioHomepage.tsx";
import PortfolioHomepage from "./PortfolioHomepage.tsx";

const Layout = () => {
  return (
    <div className='h-screen'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <PortfolioHomepage />
      </div>
      <main className='pt-16 h-full overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
