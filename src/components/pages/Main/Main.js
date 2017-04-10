import React, { Component, PropTypes } from 'react'
import {
  Button,
  Col,
  Grid,
  Jumbotron,
  Panel
} from 'react-bootstrap'

import Hobbies from '../../../containers/forms/Hobbies'
import HomeBuilder from '../../../containers/forms/HomeBuilder'
import HousingType from '../../../containers/forms/HousingType'
import Location from '../../../containers/forms/Location'
import Occupants from '../../../containers/forms/Occupants'
import Sharing from '../../../containers/forms/Sharing'
import Sustainability from '../../../containers/forms/Sustainability'
import Transport from '../../../containers/forms/Transport'
import AboutSection from './AboutSection'
import './Main.css'
import RegisterModal from './RegisterModal'
import SectionMenu from './SectionMenu'
import SectionMenuItem from './SectionMenuItem'

class Main extends Component {
  render () {
    const {
      hideRegisterForm,
      registerFormOpen,
      showRegisterForm
    } = this.props
    return (
      <Grid className='Main'>
        <Col md={2}>
          <Panel>
            <SectionMenu>
              <SectionMenuItem to='#location'>
                Location
              </SectionMenuItem>
              <SectionMenuItem to='#housing-type'>
                Housing Type
              </SectionMenuItem>
              <SectionMenuItem to='#home-builder'>
                Home Builder
              </SectionMenuItem>
              <SectionMenuItem to='#sustainability'>
                Sustainability
              </SectionMenuItem>
              <SectionMenuItem to='#transport'>
                Transport
              </SectionMenuItem>
              <SectionMenuItem to='#hobbies'>
                Hobbies and lifestyle
              </SectionMenuItem>
            </SectionMenu>
          </Panel>
        </Col>
        <Col md={8}>
          <Jumbotron className='Main-header'>
            <h1>Housing Calculator</h1>
            <p>
              <AboutSection />
            </p>
          </Jumbotron>
          <Location />
          <HousingType />
          <Occupants />
          <HomeBuilder />
          <Sustainability />
          <Transport />
          <Sharing />
          <Hobbies />
          <Panel className='Main-register'>
            <Button
              bsSize='large'
              bsStyle='success'
              onClick={showRegisterForm}
            >
              Register
            </Button>
          </Panel>
        </Col>
        <Col md={2} />
        <RegisterModal
          hideRegisterForm={hideRegisterForm}
          registerFormOpen={registerFormOpen}
        />
      </Grid>
    )
  }
}

Main.defaultProps = {
  hideRegisterForm: () => {},
  registerFormOpen: false,
  showRegisterForm: () => {}
}

Main.propTypes = {
  hideRegisterForm: PropTypes.func.isRequired,
  registerFormOpen: PropTypes.bool.isRequired,
  showRegisterForm: PropTypes.func.isRequired
}

export default Main
