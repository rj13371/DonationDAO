import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const Globe = ({ width = 147, height = 119 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 147 119"
    >
      <path
        fill="#E6E6E6"
        d="M64.5 118.314c28.669 0 51.91-2.478 51.91-5.535s-23.241-5.535-51.91-5.535c-28.67 0-51.91 2.478-51.91 5.535s23.24 5.535 51.91 5.535z"
        opacity="0.45"
      ></path>
      <path
        fill="#FFD200"
        d="M130.069 34.095a8.53 8.53 0 100-17.06 8.53 8.53 0 000 17.06z"
      ></path>
      <path
        fill="#FFD200"
        d="M130.071 41.825c8.98 0 16.26-7.28 16.26-16.26s-7.28-16.26-16.26-16.26c-8.981 0-16.26 7.28-16.26 16.26s7.279 16.26 16.26 16.26z"
        opacity="0.15"
      ></path>
      <path
        fill="#E6E6E6"
        d="M36 45.11a5.065 5.065 0 00-5.065-5.065 4.84 4.84 0 00-.815.07 6.821 6.821 0 00-6-3.595h-.25a7.95 7.95 0 00.25-1.96 8.106 8.106 0 10-16.205 0c.002.661.086 1.32.25 1.96h-.25a6.828 6.828 0 00-6.477 9.484 6.83 6.83 0 006.477 4.171H31.61v-.05A5.06 5.06 0 0036 45.11z"
        opacity="0.37"
      ></path>
      <path
        fill="#EFEFEF"
        d="M62.65 99.95c24.475 0 44.316-19.84 44.316-44.315 0-24.474-19.84-44.315-44.315-44.315-24.475 0-44.315 19.84-44.315 44.315 0 24.475 19.84 44.315 44.315 44.315z"
      ></path>
      <path
        fill="#CECECE"
        d="M29.9 26.626s.39 6.395 4.775 4.5c4.385-1.895 10.3-4 9.66 3.035-.64 7.035 2.875 8 7.83 6.235 4.955-1.765 2.555-2.24 2.875-8.63.32-6.39-8-6.71-6.71-11.185 1.29-4.475 11.265.86 7.79-8.76 0-.025-17.485 1.42-26.22 14.805zM66.79 43.28c-.93.001-1.85.202-2.696.59-1.75.835-3.86 2.85-2.66 7.66 1.915 7.695 5.11 1.975 9.265 2.915s13.585 1.905 8.95 10.37c-4.635 8.465.64 10.23 5.115 8.15 4.475-2.08 1.435-10.385 6.07-6.71s-.69 15.26 10.6 10.825c0 0 13-19.675 0-42.895 0 0-5.89-11.27-10.525-7.275-4.635 3.995 1.745 4.22 2.385 8.805.64 4.585-2.065 10.185-5.76 5.035s-2.45-4.695-8.365-5.335c-4.72-.5-8 .055-8.095 4.065a3.875 3.875 0 01-3.815 3.795l-.47.005zM65.62 18.316s-4.6-1.275-4.54 4.315c.06 5.59 3.1 5.27 6.456 3.835 3.355-1.435.5 3.195 6.875 1.92s6.87-2.78 5.43-5c-1.44-2.22-3.84-10.66-14.22-5.07zM18.335 55.636s5.405-8.84 11.31-2.866c5.905 5.975-5.715 5 .255 10.77S40 55.927 43.375 61c3.375 5.076 9.94 8.54 2.225 13-7.715 4.46-3.1 10.686.455 9.37 3.555-1.315 9.865 7.68 0 13.245 0 .026-28.955-10.54-27.72-40.98z"
      ></path>
      <path
        fill="#CECECE"
        d="M64.664 65.775s-6.07 0-6.09 5.755c-.02 5.755 11.34.31 8.7 6.545-2.64 6.235 3.565 7.915 7 5.32 3.435-2.595-2.5-10.415-1.92-15.935.58-5.52-7.015-4.24-7.69-1.685zM62.65 99.95s-3.92-4.135 4.624-5.09c8.545-.955 8.73-5.435 11.5-7.355 2.77-1.92 8.675 4.855 8.675 4.855s-10.95 9.805-24.8 7.59z"
      ></path>
      <path
        fill="#245B5B"
        d="M77.985 42.42c2.974 0 5.385-.746 5.385-1.665 0-.92-2.411-1.665-5.385-1.665-2.974 0-5.385.745-5.385 1.665s2.41 1.665 5.385 1.665z"
        opacity="0.08"
      ></path>
      <path
        fill={colorPrimaryMain}
        d="M89 19.424a11 11 0 10-20.42 5.73L78 40.57l9.36-15.34A10.94 10.94 0 0089 19.425zM78 25.27a5.385 5.385 0 110-10.77 5.385 5.385 0 010 10.77z"
      ></path>
      <path
        fill="#245B5B"
        d="M41.15 25.865c2.566 0 4.646-.613 4.646-1.37 0-.757-2.08-1.37-4.645-1.37-2.566 0-4.645.613-4.645 1.37 0 .757 2.08 1.37 4.645 1.37z"
        opacity="0.08"
      ></path>
      <path
        fill={colorPrimaryMain}
        d="M49.35 8.696a8.2 8.2 0 10-15.206 4.265l7 11.5L48.12 13a8.16 8.16 0 001.23-4.305zm-8.2 4.35a4 4 0 110-8 4 4 0 010 8z"
      ></path>
      <path
        fill="#245B5B"
        d="M65.88 71.655c1.867 0 3.38-.414 3.38-.925 0-.511-1.513-.925-3.38-.925s-3.38.414-3.38.925c0 .51 1.513.925 3.38.925zM95.614 66.79s-8 1.67-5.74 9.5c0 0-7.57 4.47-5 10.27 0 0 1.075 3.46 6.405 2.884 0 0 2.255-2 2.64-2.42.385-.42 1.695-20.235 1.695-20.235z"
        opacity="0.08"
      ></path>
      <path
        fill={colorPrimaryMain}
        d="M71.815 59.34a5.934 5.934 0 00-11.459-2.173 5.934 5.934 0 00.46 5.264l5.07 8.3 5.04-8.26a5.91 5.91 0 00.89-3.13zM65.88 62.5a2.9 2.9 0 110-5.798 2.9 2.9 0 010 5.799z"
      ></path>
      <path
        fill="#F7F7F7"
        d="M117.785 82.44a4.596 4.596 0 00-1.342-3.244 4.587 4.587 0 00-3.243-1.341 4.447 4.447 0 00-.735.065A6.176 6.176 0 00107 74.665h-.225c.146-.582.222-1.18.225-1.78a7.339 7.339 0 00-14.675 0c.003.6.078 1.198.224 1.78h-.225a6.18 6.18 0 000 12.36H113.8V87a4.59 4.59 0 003.985-4.56z"
      ></path>
    </svg>
  );
};

Globe.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Globe;
