import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import _ from 'lodash'

import {on_update_table} from './actions'

class AppSort extends Component{
    constructor(props){
        super(props)
        this.sort_input = React.createRef()
        this.type_input = React.createRef()
        this.downloadable_input = React.createRef()
        this.handle_submit = this.handle_submit.bind(this)
    }
    handle_submit(){
        this.props.on_update_table({
            left_file: this.props.csvform.left_file,
            right_file: this.props.csvform.right_file,
            left_column: this.props.joinform.left_column,
            right_column: this.props.joinform.right_column,
            join_type: this.props.joinform.join_type,
            sort_column: this.sort_input.current.value.trim(),
            sort_type: this.type_input.current.checked,
            downloadable: this.downloadable_input.current.checked
        })
    }
    render(){    
        if(_.isEmpty(this.props.header)){
            return (<div>No Join header</div>)
        }
        return(
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Sort Column</Form.Label>
            <Form.Control as="select" ref={this.sort_input}>{
                this.props.header.map(k => 
                  <option value={k}>{k}</option>
                )
            }</Form.Control>
            <Form.Check type="checkbox" defaultValue={false} label="Sort Type" ref={this.type_input} />
            <Form.Check type="checkbox" defaultValue={false} label="Downloadable" ref={this.downloadable_input} />
            <Button variant="primary" onClick={this.handle_submit}>
                Update
            </Button>
        </Form.Group>
        )
    }
}


const state2props = state => ({
    csvhead: state.csvhead,
    header: state.header,
    csvform: state.csvform,
    joinform: state.joinform
})

export default connect(state2props, on_update_table)(AppSort)
