import './SidebarOption.styles.scss'

const SidebarOption = ({ Icon, title }) => {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOptionIcon' />}
            {Icon ? (<h3>{title}</h3>)
                : (<h3 className='sidebarOptionChannel'>
                    <span className='sidebarOptionHash'>#</span>{title}
                </h3>)}
        </div>
    )
}

export default SidebarOption