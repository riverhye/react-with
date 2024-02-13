'use client';
// make it hydrate
// => less downloading => fast

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{' '}
          {path === '/about-us' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}

// ========== Next.js core concept ============
// - SSR : pre render in the backend
// When the page loads, every components pre-render in HTML
// -> user will see it
// -> initialize framework which parts should be hydrated
// - hydrate : Make it interact (HTML covered with React.js, next.js)
// use client : Render "also" in the client
// -> which is good because browser will download less JS codes
// -> FAST
// without that it means no render in client, so no need to worry about security
// -> use API key freely!
