import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './flashMessage.sass';


export class FlashMessage extends React.Component {
    constructor(props){
        super(props);

    }
    onClick = () => {
        this.props.deleteFlashMessages(this.props.message.id);
    }
    autoHideFlashMessages = () => {
        setTimeout(() => {this.props.deleteFlashMessages(this.props.message.id)}, 3000)

    }
    render() {
        const { isSuccess, text } = this.props.message;
        return (
            <div className={isSuccess ? 'flashmessage success-mesage' : 'flashmessage error-message'}>
               <span>{text}</span>
               <button className="close-btn" onClick={this.onClick} autoHideFlashMessages = {this.autoHideFlashMessages()}><FontAwesomeIcon icon="times" /></button>
            </div>
        )
    }
}

// FlashMessage.propTypes = {
//     message: React.PropTypes.object.isRequired
// }

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessages: PropTypes.func.isRequired,
  };