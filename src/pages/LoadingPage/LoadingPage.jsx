import React from 'react';

import withPageLayout from 'src/hocs/withPageLayout';

import Spinner from 'src/components/Spinner/Spinner';

const LoadingPage = () => {
  return <Spinner className="block-center" />;
};

export default withPageLayout(LoadingPage, {
  pageTitle: 'Loading… | Hacker News',
});
