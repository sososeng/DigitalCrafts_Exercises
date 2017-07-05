import React, { Component } from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import './myform.css';
import database, {User} from './fsociety.js';


class MyForm extends Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.state = {open:false, date:today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(), story:''};
  }


  update_select = (event, index, value) => {
    this.setState({color: value});
  }

  update_state (event, key) {

    this.setState({[key]: event.target.value});

  }

  handleSubmit(event) {
    console.log('submitted: ' + this.state.name );
    database.ref('diary/'+ User.user.uid).set({
      So:{name:User.user.uid},
      Diary:{date:this.state.date,story:this.state.story}
    });
    event.preventDefault();
  }



  render() {
    return (
        <div>


        <Card className="md-card">
        <CardTitle title="Today"/>
        <CardText>
          <form onSubmit={event => this.handleSubmit(event)}>
              <DatePicker hintText={this.state.date} mode="landscape" defaultLabelText= {this.state.date} />
              <br/>
              <TextField hintText="Your Journal" defaultValue="" fullWidth= {true} multiLine = {true} onChange={event => this.update_state(event, 'story')}/>

              <CardActions>
                <RaisedButton label="Save" primary={true} type = "submit"/>
              </CardActions>
          </form>
        </CardText>

        </Card>
      </div>
    );
  }
}
export default MyForm;
