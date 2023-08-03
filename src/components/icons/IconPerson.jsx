import React, { memo } from 'react';

export default memo((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    className="bi bi-person-fill"
    fill="currentColor"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
));
