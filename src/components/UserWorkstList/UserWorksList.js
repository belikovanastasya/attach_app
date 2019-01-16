import './userWorksList.sass';
import { UserWorksListItem } from '../UserWorksListItem';
import { getUserWorks } from '../../servises/users';


export class UserWorksList extends React.Component {
  constructor(){
    super();
  }
  componentDidMount() {
    getUserWorks(this.props.user).then(({works}) => this.setState({works: works}));
  }

  render() {
    const { state } = this;
    console.log(this.state)
    return (
      <div className="user-profile__works">
        {/* {state.works.map((index, item) => (<UserWorksListItem key={index} work={item} />))} */}
      </div>
    );
  }
}
