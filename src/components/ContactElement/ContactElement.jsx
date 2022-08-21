import styles from './ContactElement.module.scss';
import PropTypes from 'prop-types';

export const ContactElement = ({id, name, number, deleteContact}) => {
  const {item, btn, wrapper} = styles;

  return (
    <>
      <li className={item}>
        <div className={wrapper}>
          <span>{name}: {number}</span>
          <button
            className={btn}
            type="button"
            onClick={deleteContact(id)}>
              Delete
          </button>
        </div>
      </li>
    </>
  )
}

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default ContactElement;
