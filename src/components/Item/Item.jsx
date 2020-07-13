import React from 'react';
import PropTypes from 'prop-types';
import relativeDate from 'relative-date';

import useItem from 'src/hooks/useItem';

import Spinner from 'src/components/Spinner/Spinner';

import parseDomain from 'src/utils/parse-domain';
import getHotness from 'src/utils/get-hotness';

import styles from './Item.module.css';

const Item = ({ id, className }) => {
  const { error, isLoading, item } = useItem(id);

  if (error) {
    return (
      <article className={`${styles.item}${className ? ` ${className}` : ``}`}>
        There was an error requesting the item.
      </article>
    );
  }

  if (isLoading) {
    return (
      <article className={`${styles.item}${className ? ` ${className}` : ``}`}>
        <Spinner className="block-center" />
      </article>
    );
  }

  const { commentCount, score, title, url, author, postedAt } = item;

  const urlDomain = parseDomain(url);
  const hotness = getHotness(score);
  const prettyDate = relativeDate(postedAt);

  return (
    <article className={`${styles.item}${className ? ` ${className}` : ``}`}>
      <a
        href={`https://news.ycombinator.com/item?id=${id}`}
        className={styles.comments}
        rel="nofollow noreferrer noopener"
      >
        {commentCount ?? `-`}{' '}
        <span className="sr-only">{commentCount === 1 ? `comment` : `comments`}</span>
      </a>{' '}
      <span className={`${styles.score} ${styles[hotness]}`}>
        {score} <span className="sr-only">{score === 1 ? `upvote` : `upvotes`}</span>
      </span>{' '}
      <a
        href={`https://news.ycombinator.com/vote?id=${id}&how=up&goto=news%3Fp%3D2`}
        className={styles.upvote}
        rel="nofollow noreferrer noopener"
      >
        <span aria-hidden="true">&#9650;</span>
        <span className="sr-only">Upvote story</span>
      </a>{' '}
      <div>
        <a
          href={url ?? `https://news.ycombinator.com/item?id=${id}`}
          className={styles.title}
          rel="nofollow noreferrer noopener"
        >
          {title}
        </a>{' '}
        {urlDomain && (
          <>
            <span className={styles.source}>
              <span aria-hidden="true">(</span>
              {urlDomain}
              <span aria-hidden="true">)</span>
            </span>{' '}
          </>
        )}
        <span className={styles.author}>
          by{' '}
          <a
            href={`https://news.ycombinator.com/user?id=${author}`}
            className={styles.authorHandle}
            rel="nofollow noreferrer noopener"
          >
            {author}
          </a>
        </span>{' '}
        <time dateTime={new Date(postedAt).toISOString()} className={styles.postedAt}>
          {prettyDate}
        </time>
      </div>
    </article>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Item;
