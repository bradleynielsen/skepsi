import React from 'react'
import { connect } from "react-redux"
import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router'

import {changeTextField} from '../actions/noteActions'

@connect((store) => {
  return {
    textField: store.note.textField
  };
})

export default class NewNotePage extends React.Component {

  constructor() {
     super()
     this.changeTextField = this.changeTextField.bind(this)
   }

   changeTextField(event) {
     this.props.dispatch(changeTextField(event.target.value))
   }

  render() {
    return (
      <div>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <Card>
              <TextField
                value={this.props.textField}
                id='textfield'
                type='String'
                hintText="Text Field"
                floatingLabelText="Think you fool"
                onChange={this.changeTextField}
                multiLine={true}
                rows={3}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
