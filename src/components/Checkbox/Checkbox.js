import './checkbox';


export class Checkbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false,
    }
  }
  render() {
    return (
      <React.Fragment>
      <div className={this.state.checked ? 'checkbox-comp checked' : 'checkbox-comp'}></div>
      </React.Fragment>
    )
  }
}