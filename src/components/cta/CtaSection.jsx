import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className='big-title-cta-container'>
      <h1>LOSS</h1>
      <h1>PROJECT</h1>
      <div className='cta-buttons'>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => window.location.href='/songs'}>Go To Songs List</button>
        <button type="button" class="btn btn-danger btn-lg" onClick={() => window.location.href='https://www.youtube.com'}>View On YouTube</button>

      </div>
    </div>
  )
}

export default CTA
