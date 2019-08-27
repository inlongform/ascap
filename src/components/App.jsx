import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Form } from 'reactstrap';
import TopNav from './topnav/TopNav';
import Membership from './sections/Membership';


class App extends PureComponent {
  render() {
    return (
      <main>
        <TopNav />
        <Container>
          <Form>
            <Membership />
          </Form>
        </Container>
      </main>
    );
  }
}

App.propTypes = {
  // showComplete: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
