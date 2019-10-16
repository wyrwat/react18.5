var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        React.createElement('form', {className: 'contactForm'},
          React.createElement('label', {
            for: 'nameInput',
          }),
          React.createElement('input', {
            id: 'nameInput',
            type: 'text',
            placeholder: 'Name',
            value: this.props.contact.firstName,
            name: 'name',
          }),
          React.createElement('label', {
            for: 'surnameInput',
          }),
          React.createElement('input', {
            id: 'surnameInput',
            type: 'text',
            placeholder: 'Surname',
            value: this.props.contact.lastName,
            name: 'surname',
          }),
          React.createElement('label', {
            for: 'emailInput',
          }),
          React.createElement('input', {
            id: 'emailInput',
            type: 'email',
            placeholder: 'Email',
            value: this.props.contact.email,
            name: 'email',
          }),
          React.createElement('button', {type: 'submit'}, "Add contact")
        )
      )
    },
  })