import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Table} from 'react-bootstrap'

const AppTable = props => {
    if(_.isEmpty(props.table)){
        return (<div>No Table</div>)
    }
    const rows = props.table.split('\n')
    const first_row = rows[0]
    rows.shift()
    return(
        <Table striped bordered hover>
          <thead>
            <tr>{
                first_row.split(',').map(r => <th>{r}</th>) 
            }</tr>
          </thead>
          <tbody>{
            rows.map(row =>
                <tr>{ row.split(',').map(r => <td>{r}</td>) }</tr>
            ) 
          }</tbody>
        </Table>
    )
}

const state2props = state => ({
    table: state.table
})

export default connect(state2props, null)(AppTable)
