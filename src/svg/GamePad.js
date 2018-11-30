import React from 'react'

const SvgComponent = props => (
  <svg viewBox={'0 0 24 24'} role={'presentation'} width={'1em'} height={'1em'} {...props}>
  <path fill="none" d="M0 0h24v24H0z"></path>
    <path 
    fill={'white'} d="M7 6h10a6 6 0 0 1 6 6 6 6 0 0 1-6 6c-1.78 0-3.37-.77-4.47-2h-1.06c-1.1 1.23-2.69 2-4.47 2a6 6 0 0 1-6-6 6 6 0 0 1 6-6M6 9v2H4v2h2v2h2v-2h2v-2H8V9H6m9.5 3a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5m3-3a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 18.5 9z" />
  </svg>
)

export default SvgComponent
