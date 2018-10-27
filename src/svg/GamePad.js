import React from 'react'

const SvgComponent = props => (
  <svg width={24} height={24} {...props}>
    <path fill={'white'} d="M7 6h10a6 6 0 0 1 6 6 6 6 0 0 1-6 6c-1.78 0-3.37-.77-4.47-2h-1.06c-1.1 1.23-2.69 2-4.47 2a6 6 0 0 1-6-6 6 6 0 0 1 6-6M6 9v2H4v2h2v2h2v-2h2v-2H8V9H6m9.5 3a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5m3-3a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 18.5 9z" />
  </svg>
)

export default SvgComponent
