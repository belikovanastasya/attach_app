import './userWorksList.sass';
import { UserWorksListItem } from '../UserWorksListItem';
import { getUserWorks } from '../../servises/users';
import { UserWork } from '../UserWork';

export class UserWorksList extends React.Component {
  constructor() {
    super();
    this.state = {
      works: []
    };
  }
  componentDidMount() {
    getUserWorks(this.props.user).then(({ works }) => this.setState({ works }));
  }

  render() {
    const { state } = this;
    return (
      <div className="user-profile-works">
        <div className="user-profile-works__list">
          {state.works.map((item, index) => (
            <UserWorksListItem key={index} works={item} />
          ))}
        </div>
        {/* <div className="user-profile-works__item">
          <UserWork />
        </div> */}
      </div>
    );
  }
}
