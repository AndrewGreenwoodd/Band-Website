import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Navigation.module.css'

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: ()=> void;
}

export function NavLink({ href, exact = false, children, className = '',onClick, ...props }: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    className += ` ${styles.active}`;
  }
  const handleClick = () => {
    if (onClick) {
      onClick(); 
    }
  };

  return (
    <Link href={href}>
      <div className={className} onClick={handleClick}  {...props}>
        {children}
      </div>
    </Link>
  );
}

export default NavLink;