import './userWorksList.sass';
import { getUserWorks } from '../../servises/users';


export class UserWorksList extends React.Component {

  componentDidMount() {
    getUserWorks(this.props.user).then(works => this.setState(works));
  }

  render() {
    const { state } = this;
    return (
      <div />
    );
  }
}
