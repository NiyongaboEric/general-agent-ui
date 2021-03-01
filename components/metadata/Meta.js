import Head from 'next/head';

const Meta = ({ title, description, keywords  }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2690F4" />
        <meta
          name="description"
          content={description}
        />
        <meta name="keyword" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </div>
  )
}

Meta.defaultProps = {
  title: '',
  description: '',
  keywords: '',
};

export default Meta;
