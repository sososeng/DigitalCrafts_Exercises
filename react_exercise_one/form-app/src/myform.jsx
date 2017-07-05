import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './myform.css';


class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', color: 'blue'};
  }


  update_select = (event, index, value) => {
    this.setState({color: value});
  }

  update_state (event, key) {
  this.setState({[key]: event.target.value});
}

  handleSubmit(event) {
    console.log('submitted: ' + this.state.name + this.state.color);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <AppBar title="My Awesome Form" />

        <Card className="md-card">
        <CardTitle title="My Form" subtitle="subtitle"/>
        <CardText>
          <form onSubmit={event => this.handleSubmit(event)}>


              <TextField floatingLabelText="Your Name" defaultValue={this.state.name} onChange={event => this.update_state(event, 'name')}/>
            <br/><br/>
              <SelectField floatingLabelText="Color" value={this.state.color} onChange={this.update_select}>
                <MenuItem value="red" primaryText="Red" />
                <MenuItem value="blue" primaryText="Blue" />
              </SelectField>
            <br/><br/>
              <CardActions>
                <RaisedButton label="Submit" primary={true} type = "submit"/>
              </CardActions>
          </form>
        </CardText>

      </Card>
    </div>

    );
  }
}
export default MyForm;
