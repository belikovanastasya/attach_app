import './userWorksList.sass';
import { UserWorksListItem } from '../UserWorksListItem';
import { getUserWorks } from '../../servises/users';


export class UserWorksList extends React.Component {
  constructor(){
    super();
    this.state = {
      works: [],
    }
  }
  componentDidMount() {
    getUserWorks(this.props.user).then(({ works }) => this.setState({ works }));
  }

  render() {
    const { state } = this;
    return (
      <div>
        {this.state.works.map((item, index) =>
          <UserWorksListItem key={index} works={item} />)}
      </div>
    );
  }
}
