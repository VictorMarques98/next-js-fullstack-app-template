import Link from 'next/link';

export interface ISidebarLayout {}

const SideBarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav>
      <input placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default SideBarLayout;
