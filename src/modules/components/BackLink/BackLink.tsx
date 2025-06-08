import { Link } from 'react-router-dom';
import styles from './BackLink.module.scss';
import ArrowLeft from '../../../images/icons/Arrow Left (svg).svg';

interface BackLinkProps {
  fromCategory: string;
}

export const BackLink: React.FC<BackLinkProps> = ({ fromCategory }) => {
  return (
    <Link to={fromCategory} className={styles['back-link']}>
      <img src={ArrowLeft} className={styles['back-link__icon']} />
      <p className={styles['back-link__text']}>Back</p>
    </Link>
  );
};
