import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './flashMessagesList.sass';
import { FlashMessage } from '../FlashMessage';
import { deleteFlashMessages } from '../../store';

export class FlashMessagesListComponent extends React.Component {
  render() {
    const messages = this.props.messages.map(message => (
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessages={this.props.deleteFlashMessages}
      />
    ));
    return (
      <div className="container">
        <div className="messages-list__box">{messages}</div>
      </div>
    );
  }
}

const mapStoreToProps = state => ({
  messages: state.flashMessages,
});
export const FlashMessagesList = connect(mapStoreToProps, { deleteFlashMessages })(FlashMessagesListComponent);


FlashMessagesListComponent.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessages: PropTypes.func.isRequired,
};
