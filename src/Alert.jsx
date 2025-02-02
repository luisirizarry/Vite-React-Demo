const Alert = ({variant, children}) => {
    const colors = {
        success: 'green',
        danger: 'red',
        warning: 'yellow'
    }
    return (
        <div style={{ backgroundColor: colors[variant] }}>
            {children}
        </div>
    )
}

export default Alert;