import './Registration.sass';
import { SingUpForm } from '../../components/SingUpForm';
import { Form } from '../../components/Form'

export class Registration extends React.Component{
  constructor(props) {
    super(props)
  }

render() {
  return (
    <section className="registration">
      <div className="container">
        <div className="registration_wrap">
        <Form
        excluded={['firstName', 'lastName', 'description']}
        button={'singUp'}
         />
        </div>
      </div>
    </section>
  );
}
}



