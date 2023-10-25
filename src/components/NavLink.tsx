import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Navigation.module.css'

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, exact = false, children, className = '', ...props }: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    className += ` ${styles.active}`;
  }

  return (
    <Link href={href}>
      <div className={className} {...props}>
        {children}
      </div>
    </Link>
  );
}

export default NavLink;