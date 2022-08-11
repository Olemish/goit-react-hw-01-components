import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Item } from '../App/App.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h1 className={css.title}>{title}</h1>}
      <ul className={css.statlist}>
        {stats.map(item => (
          <div key={item.id}>
            <Item>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </Item>
          </div>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
