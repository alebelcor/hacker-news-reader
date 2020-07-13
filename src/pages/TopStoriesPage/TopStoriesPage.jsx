import React, { useState, useRef, useEffect } from 'react';
import { queryCache } from 'react-query';
import { useIntersection } from 'react-use';

import withPageLayout from 'src/hocs/withPageLayout';

import Item from 'src/components/Item/Item';

import styles from './TopStoriesPage.module.css';

const TopStoriesPage = () => {
  const topStories = queryCache.getQueryData('topStories');

  const [stories, setStories] = useState([]);

  const loadingZoneEl = useRef(null);
  const intersection = useIntersection(loadingZoneEl, {
    rootMargin: '60px',
    threshold: 0.01,
  });

  useEffect(() => {
    setStories([...stories, topStories[0]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (stories.length > 0) {
      const latestStoryFetchedIndex = topStories.indexOf(stories[stories.length - 1]);
      const nextItemId = topStories[latestStoryFetchedIndex + 1] ?? null;
      const hasMoreItems = Boolean(nextItemId);

      if (intersection && intersection.isIntersecting && hasMoreItems) {
        setStories([...stories, nextItemId]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersection, stories]);

  return (
    <>
      <section className={styles.itemList}>
        {stories.map((itemId, index) => {
          return (
            <Item
              key={itemId}
              id={itemId}
              className={(index + 1) % 2 === 0 ? styles.evenItem : null}
            />
          );
        })}
      </section>

      <div aria-hidden="true" ref={loadingZoneEl} />
    </>
  );
};

export default withPageLayout(TopStoriesPage, {
  pageTitle: 'Top News | Hacker News',
});
