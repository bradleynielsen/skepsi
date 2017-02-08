import React from 'react'
import { connect } from "react-redux"

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { Link } from 'react-router'



@connect((store) => {
  return {
  };
})
export default class Welcome extends React.Component {


  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.submitName = this.submitName.bind(this)
    this.submitNewUser
  }


  handleChange(event) {
    this.props.dispatch(changeInputNum(parseInt(event.target.value)))
  }

  handleNameChange(event) {
    this.props.dispatch(changeInputName(event.target.value))
  }

  submitName() {
    this.props.dispatch(submitName())
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <Card>
              <CardTitle
                title={`The New Home Order`}
                subtitle={` view your temp in static...`}
              />
              <CardText>
              <div>
                <Link to={'TempView'}>
                  <RaisedButton
                    label="Go to Tempurature View"
                    primary={false}
                  />
                </Link>
              </div>

              </CardText>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <Card>
              <CardText>
                <TextField
                  type='text'
                  onChange={this.handleNameChange}
                  value={this.props.inputName}
                />
              </CardText>

              <CardActions>
                <RaisedButton
                  label="Users"
                  primary={true}
                  onClick={this.submitName}
                />
              </CardActions>

            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
