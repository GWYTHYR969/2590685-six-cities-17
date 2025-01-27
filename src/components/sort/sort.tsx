import cn from 'classnames';
import { memo, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app';
import { getSortingType } from '../../store/offer/offer-selectors';
import { changeSorting } from '../../store/offer/offer-data';
import { SortBy } from '../../const';

function SortComponent(): JSX.Element {
  const [mouseHover, setMouseHover] = useState(false);

  const sortBy = useAppSelector(getSortingType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onMouseEnter={() => setMouseHover(true)} >
        {sortBy}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', { 'places__options--opened': mouseHover })}
        onMouseLeave={() => setMouseHover(false)}
        onClick={() => setMouseHover(false)}
      >
        {Object.values(SortBy).map((sortItem) => (
          <li key={sortItem}
            className={cn('places__option', { 'places__option--active': sortBy === sortItem})}
            tabIndex={0}
            onClick={() => dispatch(changeSorting(sortItem))}
          >
            {sortItem}
          </li>))}
      </ul>
    </form>
  );
}

const Sort = memo(SortComponent);

export { Sort };
