import React from 'react';

import withPageLayout from 'src/hocs/withPageLayout';

const ErrorPage = () => {
  return (
    <div className="text-center">
      There was en error loading the page. Please refresh to try again.
    </div>
  );
};

export default withPageLayout(ErrorPage, {
  pageTitle: 'Error | Hacker News',
});
