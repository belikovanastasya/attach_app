import './userWorksListItem.sass';


export class UserWorksListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  render() {
    const { works } = this.props;
    const { open } = this.state;
    return (
      <div className="user-profile-works__item">
        <h2>{works.name}</h2>
        <div>
          <span className="row_point">Project:</span>
          <span>{works.project}</span>
        </div>
        <div>
          <span className="row_point">Votes:</span>
          <span>{works.vots}</span>
        </div>
        <div className="user-profile-works__btn">{open
            ? 'More'
          : 'Close'}
        </div>
      </div>
    );
  }
}
