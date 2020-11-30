const SvgComponent = (props) => (
  <svg
    aria-hidden="true"
    style={{
      msTransform: 'rotate(360deg)',
      WebkitTransform: 'rotate(360deg)',
    }}
    viewBox="0 0 432 432"
    transform="rotate(360)"
    {...props}
  >
    <path
      d="M405 88q9 0 15.5 6.5T427 109v320l-86-85H107q-9 0-15.5-6.5T85 323v-43h278V88h42zm-85 128q0 9-6.5 15t-14.5 6H85L0 323V24q0-9 6.5-15T21 3h278q8 0 14.5 6t6.5 15v192z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent
