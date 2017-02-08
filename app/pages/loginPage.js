import React from 'react'
import { connect } from "react-redux"


import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


@connect((store) => {
  return {
    count: store.counter.count,
    user: store.user.user,
    textField: store.user.textField
  };
})

export default class Welcome extends React.Component {

  constructor() {
    super()
    this.changeUser = this.changeUser.bind(this)
    this.changeTextField = this.changeTextField.bind(this)
  }

  incrementCount() {
    this.props.dispatch(incrementCount())
  }

  decrementCount() {
    this.props.dispatch(decrementCount())
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
                    hintText="enter your username"
                    fullWidth={true}
                  /><br/>
                  <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                    fullWidth={true}
                  /><br />
                  <CardActions>
                    <RaisedButton
                        label="Sign-in"
                        primary={true}
                        color={'black'}
                    /><br/>

                    <Link to= {`/newusers`}>
                      <RaisedButton
                          label="New User"
                          primary={true}
                          color={'black'}
                      />
                    </Link>
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
