import Head from 'next/head';

export interface IPrimary {
    children: any,
}

const PrimaryLayout: React.FC<IPrimary> = ({ children }) => {
  return (
    <>
      <Head>Primary Layout Example</Head>
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
