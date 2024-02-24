import PropTypes from 'prop-types'
const Button = (props) => {
  return (
    <>
        <button type="button" className={`btn btn-primary mx-2 my-3 bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'white' : 'dark'}`}  onClick={props.onClick}>{props.label}</button>
    </>
  )
}

Button.propTypes ={
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
}

export default Button