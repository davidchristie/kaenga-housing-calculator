import React, { Component } from 'react'
import { Well } from 'react-bootstrap'
import { Link } from 'react-router'

import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <Well className='Footer' style={{textAlign: 'center'}}>
        <ul>
          <li>
            <strong>
              &copy; 2017 Kaenga
            </strong>
          </li>
          <li>
            <Link to='/privacy'>Privacy</Link>
          </li>
        </ul>
      </Well>
    )
  }
}

export default Footer
