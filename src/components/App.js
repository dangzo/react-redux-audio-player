import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

// App components
import AudioPlayer from './AudioPlayer';

const App = () => (
  <Grid>
    <Row>
      <Col md={6} mdOffset={3}>
        <PageHeader className="align-center">
          React-Redux Audio Player
        </PageHeader>
      </Col>
    </Row>
    <Row className="showGrid">
      <Col md={6} mdOffset={3}>
        <AudioPlayer />
      </Col>
    </Row>
    <footer>
      <Row className="showGrid">
        <Col md={6} mdOffset={3}>
          <div className="align-center">
            <p>Coded by Daniele Gazzelloni</p>
            <p>
              <a
                href="https://github.com/dangzo/react-redux-audio-player"
                target="_new"
              >
                https://github.com/dangzo/react-redux-audio-player
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  </Grid>
);

export default App;
