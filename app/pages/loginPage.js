import React from 'react'
import { connect } from "react-redux"


import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


export default class Welcome extends React.Component {




  render() {
    return (
      <div>
        <Row>        
          <Col md={12} >
            <card>
              <CardTitle
                title={`Login Page`}
                subtitle={`Enter your shit`}
              />


              <div>
                <Col md={12} >

                  <TextField
                    hintText="enter your username"
                    fullWidth={true}
                  /><br /><br /><br/>

                <TextField
                  hintText="Password Field"
                  floatingLabelText="Password"
                  type="password"
                  fullWidth={true}
                /><br />


                <RaisedButton
                    label="Sign-in"
                    primary={true}
                    color={'black'}
                />  <br /><br /><br /><br /><br />
                <RaisedButton
                    label="New Users"
                    primary={true}
                    color={'black'}
                />

                </Col>
              </div>


            </card>
          </Col>
        </Row>        







      </div>
    );
  }
   
}   