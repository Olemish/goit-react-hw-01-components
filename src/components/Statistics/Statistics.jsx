import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
 
    return (
<section className={css.statistics}>
 <h1 className={css.title}>{title}</h1>
    <ul className={css.statlist}>
            {stats.map(item => (
            <div key={item.id}>
            <li className={css.item}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
            </div>
            ))}
    </ul>
</section>
    )
} 

Statistics.propTypes = {
  title:PropTypes.string,
  label: PropTypes.string,
  percentage:PropTypes.number 
}