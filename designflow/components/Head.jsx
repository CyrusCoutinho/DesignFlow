import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="title"
        content="DesignFlow - The Social Network for Designers"
      />
      <meta
        name="description"
        content="Discover creative websites and designers across the globe. "
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta
        property="og:title"
        content="DesignFlow - The Social Network for Designers"
      />
      <meta
        property="og:description"
        content="Discover creative websites and designers across the globe. "
      />
      <meta property="og:image" content="https://imgur.com/e0p2qaM.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta
        property="twitter:title"
        content="DesignFlow - The Social Network for Designers"
      />
      <meta
        property="twitter:description"
        content="Discover creative websites and designers across the globe. "
      />
      <meta property="twitter:image" content="https://imgur.com/e0p2qaM.png" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'DesignFlow',
};
