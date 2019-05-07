import React, {Component} from 'react'
import {connect} from 'react-redux'
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap'
import {on_update_schema} from './actions'

class MysqlForm extends Component{
    constructor(props){
        super(props)
        this.handle_submit = this.handle_submit.bind(this)
        this.host_input = React.createRef()
        this.user_input = React.createRef()
        this.passwd_input = React.createRef()
    }
    handle_submit = () => {
        this.props.on_update_schema({
            mysql_host: this.host_input.current.value.trim(),
            mysql_user: this.user_input.current.value.trim(),
            mysql_passwd: this.passwd_input.current.value.trim()
        })
    }
    render(){
        return(
            <Form.Group controlId="exampleForm.ControlInput1">
                <InputGroup className="mb-3">
                  <FormControl
                      name="mysql_host"
                      ref={this.host_input}
                      placeholder="Host"
                      aria-label="Host"
                      aria-describedby="basic-addon1"
                  />
                  <FormControl
                      name="mysql_user"
                      ref={this.user_input}
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                  />
                  <FormControl
                      name="mysql_passwd"
                      ref={this.passwd_input}
                      type="password"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                  />
                  <InputGroup.Append>
                      <Button variant="outline-secondary" onClick={this.handle_submit}>Connect</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        )
    }
}

export default connect(null, on_update_schema)(MysqlForm)
