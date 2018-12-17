import './flashMessagesList.sass';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FlashMessage } from './FlashMessage'

export class FlashMessagesListComponent extends React.Component {
    render() {
        const messages = this.props.messages.map(message => <FlashMessage key={message.id} message={message} />)
        return (
            <div className="container">
                <div className="messages-list__box">
                    {messages}
                </div>
            </div>

        )
    }
}

const mapStoreToProps = state => ({
    messages: state.flashMessages,
});
export const FlashMessagesList = connect(mapStoreToProps)(FlashMessagesListComponent);


FlashMessagesListComponent.propTypes = {
    messages: PropTypes.array.isRequired,
};
