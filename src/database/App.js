import React from 'react';
import AppTree from './AppTree'
import AppSort from './AppSort'
import AppTable from './AppTable'
import MysqlForm from './MysqlForm'
import {Form} from 'react-bootstrap'

const App = props =>
    <Form>
        <MysqlForm />
        <AppTree />
        <AppSort />
        <AppTable />
    </Form>

export default App;
