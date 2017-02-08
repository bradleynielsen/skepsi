import React from 'react'
import { connect } from "react-redux"
import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router'




@connect((store) => {
  return {

  };
})

export default class NewNotePage extends React.Component {



  render() {
    return (
      <div>
        <TextField
          hintText="Message Field"
          floatingLabelText="MultiLine and FloatingLabel"
          multiLine={true}
          rows={2}
        /><br />

      </div>
    );
  }
}
