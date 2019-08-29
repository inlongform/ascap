import React, { PureComponent } from 'react';
import { Container, Form } from 'reactstrap';
import TopNav from './topnav/TopNav';
import Membership from './sections/Membership';


class App extends PureComponent {
  render() {
    return (
      <main>
        <TopNav />
        <Container className="position-relative">
          <Form>
            <Membership sectionNum="1" />
            {/* add other sections as needed */}
          </Form>
        </Container>
      </main>
    );
  }
}


export default App;
