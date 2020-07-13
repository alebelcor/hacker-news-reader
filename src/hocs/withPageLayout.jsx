import React, { useEffect } from 'react';

import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

const withPageLayout = (PageComponent, { pageTitle } = {}) => {
  return (props) => {
    useEffect(() => {
      if (pageTitle) {
        document.title = pageTitle;
      }

      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <Header />

        <div className="wrapper">
          <div className="page">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <PageComponent {...props} />
          </div>
        </div>

        <Footer />
      </>
    );
  };
};

export default withPageLayout;
