import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import _ from 'lodash'

import {on_update_column} from './actions'

class AppTree extends Component{
    constructor(props){
        super(props)
        this.left_input = React.createRef()
        this.right_input = React.createRef()
        this.join_input = React.createRef()
        this.handle_submit = this.handle_submit.bind(this)
    }
    handle_submit(){
        this.props.on_update_column({
            mysql_host: this.props.mysqlform.mysql_host,
            mysql_user: this.props.mysqlform.mysql_user,
            mysql_passwd: this.props.mysqlform.mysql_passwd,
            left_column: this.left_input.current.value.trim(),
            right_column: this.right_input.current.value.trim(),
            join_type: this.join_input.current.value.trim()
        })
    }
    render(){    
        if(_.isEmpty(this.props.schema)){
            return (<div>No Schema</div>)
        }
        return(
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Left Column</Form.Label>
            <Form.Control as="select" ref={this.left_input}>{
                this.props.schema.map(k => 
                  <option value={k}>{k}</option>
                )
            }</Form.Control>
            <Form.Label>Right Column</Form.Label>
            <Form.Control as="select" ref={this.right_input}>{
                this.props.schema.map(k => 
                  <option value={k}>{k}</option>
                )
            }</Form.Control>
            <Form.Label>Join Type</Form.Label>
            <Form.Control as="select" ref={this.join_input}>{
                ['inner', 'outer', 'left', 'right'].map(k => 
                  <option value={k}>{k}</option>
                )
            }</Form.Control>
            <Button variant="primary" onClick={this.handle_submit}>
                Update
            </Button>
        </Form.Group>
        )
    }
}


const state2props = state => ({
    schema: state.schema,
    mysqlform: state.mysqlform
})

export default connect(state2props, on_update_column)(AppTree)
