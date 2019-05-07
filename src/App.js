import React from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap'

import Database from './database'
import Csv from './csv'

const App = props =>
    <Container>
        <Tabs defaultActiveKey="database" id="uncontrolled-tab-example">
            <Tab eventKey="database" title="Database">
                <Database />
            </Tab>
            <Tab eventKey="csv" title="Csv">
                <Csv />
            </Tab>
        </Tabs>
    </Container>

export default App;
