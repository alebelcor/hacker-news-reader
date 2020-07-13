import React, { Suspense, lazy } from 'react';

import useTopStories from 'src/hooks/useTopStories';

import LoadingPage from 'src/pages/LoadingPage/LoadingPage';

const ErrorPage = lazy(() => import('src/pages/ErrorPage/ErrorPage'));
const TopStoriesPage = lazy(() => import('src/pages/TopStoriesPage/TopStoriesPage'));

const Root = () => {
  const { error, isLoading } = useTopStories();

  if (error) {
    return (
      <Suspense fallback={<LoadingPage />}>
        <ErrorPage />
      </Suspense>
    );
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <TopStoriesPage />
    </Suspense>
  );
};

export default Root;
