import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className="header" >
            <h1 >{title}</h1>
            <Button color="green" text="Add" onClick={onClick} />
        </header>
    )
}

const headingStyle = {
    color:'#fff',
    fontSize:'45px',
    backgroundColor:'black'
}

Header.defaultProps = {
    title: 'header 1',
}

Header.propTypes = {
title: PropTypes.string.isRequired
}

export default Header
