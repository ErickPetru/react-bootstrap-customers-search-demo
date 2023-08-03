import React, { memo } from 'react';

export default memo((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    className="mdi mdi-external-link"
    fill="currentColor"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z" />
  </svg>
));
