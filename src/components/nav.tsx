/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Nav = (): JSX.Element => (
  <header
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
    }}
  >
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%',
      }}
    >
      <Link href="/">
        <a sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>
          Note App
        </a>
      </Link>

      <Link href="/notes">
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>notes</a>
      </Link>
    </nav>
  </header>
);

export default Nav;
