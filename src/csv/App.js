import React from 'react';
import AppTree from './AppTree'
import AppSort from './AppSort'
import AppTable from './AppTable'
import CsvForm from './CsvForm'
import {Form} from 'react-bootstrap'

const App = props =>
    <Form>
        <CsvForm />
        <AppTree />
        <AppSort />
        <AppTable />
    </Form>

export default App;
