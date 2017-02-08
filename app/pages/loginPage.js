import React from 'react'
import { connect } from "react-redux"
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { changeUser, changeTextField } from '../actions/loginActions'



@connect((store) => {
  return {
    user: store.login.user,
    textField: store.login.textField
  };
})

export default class Welcome extends React.Component {

  constructor() {
    super()
    this.changeUser = this.changeUser.bind(this)
    this.changeTextField = this.changeTextField.bind(this)
  }

  changeUser() {
    this.props.dispatch(changeUser())
  }

  changeTextField(event) {
    this.props.dispatch(changeTextField(event.target.value))
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12} >
            <Card>
              <CardTitle
                title={`Login Page`}
                subtitle={`Enter your shit`}
              />
              <div>
                <Col md={12}>
                  <TextField
                    hintText="Username"
                    fullWidth={true}
                  /><br/>
                  <TextField
                    // hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                    fullWidth={true}
                  /><br />
                  <CardActions>
                    <Col md={8} offset={{ md: 2 }}>

                        <RaisedButton
                          label="Sign-in"
                          primary={true}
                          color={'black'}
                        />

                    </Col>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                      <Col md={8} offset={{ md: 10 }}>

                        <RaisedButton
                          label="New User"
                          primary={true}
                          color={'black'}
                          offset={{ md: 6 }}
                        />

                    </Col>
                  </CardActions>

                </Col>
              </div>


            </Card>
          </Col>
        </Row>


      </div>
    );
  }
}
