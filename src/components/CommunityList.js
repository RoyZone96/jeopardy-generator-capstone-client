import React from 'react'
import CommunityNav from './CommunityNav'
const { API_BASE_URL } = require('../config')

export default function CommunityList(props) {
  

    return (
      <section key = {props.id} className="community-list">
        <ul>
          <li>
            <div className="wrapper">
              <div>
                <CommunityNav id={props.id}/>
              </div>
            </div>
          </li>
        </ul>
      </section>
    )
  }