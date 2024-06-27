import React from 'react'
import { Link } from 'react-router-dom'

function OpenTerminal() {
  return (
    <button style={{background: '#3f3f3f', padding: '10px', borderRadius: '20px'}}><Link style={{padding: '20px', color: '#fff', textDecoration: 'none'}} to ='/'> Open Terminal</Link></button>
  )
}

export default OpenTerminal