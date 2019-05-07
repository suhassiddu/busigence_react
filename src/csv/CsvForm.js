import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form} from 'react-bootstrap'
import {on_update_csvhead} from './actions'

class CsvForm extends Component{
    constructor(props){
        super(props)
        this.handle_submit = this.handle_submit.bind(this)
        this.leftfile_input = React.createRef()
        this.rightfile_input = React.createRef()
    }
    handle_submit(){
        this.props.on_update_csvhead({
            left_file: this.leftfile_input.current.files[0],
            right_file: this.rightfile_input.current.files[0]
        })
    }
    render(){
        return(
            <Form.Group controlId="exampleForm.ControlInput1">
                <input type="file" ref={this.leftfile_input} />
                <input type="file" ref={this.rightfile_input} />
                <Button variant="primary" onClick={this.handle_submit}>Update</Button>
            </Form.Group>
        )
    }
}

export default connect(null, on_update_csvhead)(CsvForm)
