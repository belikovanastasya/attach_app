import './Form';
import './form.sass';

export class Form extends Component {
  static get fields() {
    return [
      { id: 'email', label: 'Email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
      { id: 'firstName', label: 'First name', reg: /^[^ ]{3,20}$/ },
      { id: 'lastName', label: 'Last name', reg: /^[^ ]{3,20}$/ },
      { id: 'password', label: 'Password', reg: /^[^ ]{6,20}$/, secure: true },
      { id: 'password_confirm', label: 'Repeat password', reg: /^[^ ]{6,20}$/, secure: true },
    ];
  }

  constructor(props) {
    super(props);

    this.fields = Form.fields;
    this.state = {
      error: '',
      checked: false
    };
    !this.props.data ?
    this.fields.forEach(field => (this.state[field.id] = { value: '' })) : this.fields.forEach(field => (this.state[field.id] = { value: this.props.data[field.id] }))
  }
  componentDidMount() {
    this.fields = this.getActualFields();
  }
  setValue = ({ target }) => {
    this.setState({
      [target.name]: { value: target.value }
    });
    this.props.clearErrors();
  }
  validate = (index) => {
    const field = this.fields[index];
    const stateField = this.state[field.id];
    if (field.reg.test(stateField.value)) {
      stateField.error = '';
    } else {
      stateField.error = `${field.label} is invalid`;
    }

    this.setState({
      [field.id]: stateField
    });
  }

  getDisabledState() {
    return this.getActualFields()
      .some(({ id }) => {
        const { value, error } = this.state[id];
        return !value || error;
      });
  }

    save = (event) => {
      const { state } = this;
      let error = '';
      event.preventDefault();
      if (state.password.value !== state.password_confirm.value) {
        error = 'Passwords should be the same';
      }
      this.setState({ error });
      if (error) return;
      this.props.onSubmit(this.getFormValue());
    }
    getFormValue() {
      const form = {};
      this.fields
        .filter(field => !this.props.excluded.includes(field.id))
        .filter(field => !this.props.skipped.includes(field.id))
        .forEach(field => form[field.id] = this.state[field.id].value);
      return form;
    }
    getActualFields() {
      return this.fields
        .filter(field => !this.props.excluded.includes(field.id))
        .filter(field => !this.props.skipped.includes(field.id))
        .filter(field => !this.props.disabled.includes(field.id));
    }
    render() {
      const { state, fields } = this;
      const { excluded, disabled, buttonName, checkbox, desctiption, avatar } = this.props;
      const buttons = { signUp: { name: 'sing Up', value: 'Sing Up' }, save: { name: 'Save', value: 'Save' } };
      return (
        <form
          className="form"
          onSubmit={this.save}
        >
          <div className="registration-template none-aithorize-template active">
          {avatar && <div className="additional-field">
          <div className="avatar-holder">
          <input
            name='avatar'
            type='file'
            onChange={this.setValue}
          />
          </div>
          </div>}
        {checkbox && <div className="additional-field">
          <div className="checkbox-holder">
          <input
            name='checked'
            type='checkbox'
            checked={state.checked}
            onChange={this.setValue}
          />
          </div>
          <span>I am a desinger</span>
          </div>}
          {fields
            .filter(({ id }) => !excluded.includes(id))
            .map(({ label, secure, id }, index) => {
              const stateField = state[id];
              return (
                <div className="main-field" key={label}>
                  <input
                    type={secure ? 'password' : 'text'}
                    name={id}
                    className={stateField.error ? 'invalid' : 'correct'}
                    placeholder={label}
                    value={stateField.value}
                    onChange={this.setValue}
                    onBlur={() => this.validate(index)}
                    disabled={disabled.includes(id)}
                  />
                  {stateField.error && <span className="error-text">{stateField.error}</span>}
                </div>
              );
            })}
            {desctiption && <textarea
            name='description'
            onChange={this.setValue}
           />}
          </div>
          {state.error && <span className="error-text">{state.error}</span>}
          <div className="btn_holder">
            <button
              className="saveBtn btn"
              type="submit"
              disabled={this.getDisabledState()}
            ><span>{buttons[buttonName].name}</span>
            </button>
          </div>
        </form>
      );
    }
}

Form.defaultProps = {
  excluded: [],  //excluded fields from array
  disabled: [],  //disables fields
  skipped: [],
  buttonName: 'Save',
  checkbox: false,
  desctiption: false,
  avatar: false,
  clearErrors: _ => _,
  onSubmit: _ => _
};
