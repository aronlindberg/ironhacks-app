import React from 'react';

class InputTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let value = event.target.value;
    if (this.props.onInputChange) {
      this.props.onInputChange(this.props.name, value);
    }
  }

  render() {
    return (
      <div className={`input_field ${this.props.containerClass}`}>
        <label
          htmlFor={this.props.name}
          className={`input_label ${this.props.labelClass}`}
          >
          <span className="input_label__name">
            {this.props.label}
          </span>
        </label>

        <textarea
          className={`input text_input ${this.props.inputClass}`}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}


InputTextarea.defaultProps = {
  name: '',
  label: '',
  labelClass: '',
  inputClass: '',
  containerClass: '',
}

export { InputTextarea }
