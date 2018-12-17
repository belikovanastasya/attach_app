import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './flashMessage.sass';


export class FlashMessage extends React.Component {
    render() {
        const { id, isSuccess, text } = this.props.message;
        return (
            <div className={isSuccess ? 'flashmessage success-mesage' : 'flashmessage error-message'}>
               <span>{text}</span>
               <FontAwesomeIcon icon="times" />
            </div>
        )
    }
}

// FlashMessage.propTypes = {
//     message: React.PropTypes.object.isRequired
// }

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
  };