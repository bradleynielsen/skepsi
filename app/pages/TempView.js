import React from 'react'
import { connect } from "react-redux"
import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router'

import {setTemp} from '../actions/tempActions'


@connect((store) => {
  return {
    temp: store.temp.temp
  };
})

export default class TempView extends React.Component {

  constructor() {
    super()
    this.incrementTemp = this.incrementTemp.bind(this)
    this.decrementTemp = this.decrementTemp.bind(this)
  }

  incrementTemp() {
    this.props.dispatch(setTemp(this.props.temp+1))
  }

  decrementTemp() {
    this.props.dispatch(setTemp(this.props.temp-1))
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12} offset={{ md: 4 }}>
            <Card>
              <CardTitle
                title={`Temp View`}
                subtitle={`The Temp is ${this.props.temp}`}
              />
              <CardActions>
                <RaisedButton
                  label="Increment"
                  primary={true}
                  onClick={this.incrementTemp}
                />

                <RaisedButton
                  label="Decrement"
                  primary={true}
                  onClick={this.decrementTemp}
                />
              </CardActions>
            </Card>


            <Card>
              <CardText>
                <TextField
                  type='text'

                  value={"stuff"}
                />
              </CardText>
              <CardActions>

                  <RaisedButton
                    label="New Users"
                    primary={true}
                  />


                <Link to={`/login`}>
                  <RaisedButton
                    label="Go to login"
                    primary={true}

                  />
                </Link>
              </CardActions>
            </Card>

          </Col>
        </Row>

      </div>
    );
  }
}
