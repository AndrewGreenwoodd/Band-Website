import Navigation from './Navigation';
import classes from './Layout.module.css';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div>
        <Navigation />
        <main className={classes.main}>{children}</main>
        <Footer/>
      </div>
    );
  }

export default Layout;
