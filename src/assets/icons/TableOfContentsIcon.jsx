import React from 'react'

const TableOfContentsIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon-upload"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={props.stroke}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 3h16" />
      <path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" />
      <path d="M14 7h-4" />
      <path d="M10 15h4" />
      <path d="M10 18h4" />
      <path d="M12 11v-4" />
    </svg>
  )
}

export default TableOfContentsIcon
