function HeaderIcon({active, icon, onClick }:any) {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    }
    return (
      <div className={`${active ? 'icon--active' : ''} header__icon flex items-center`} onClick={handleClick}>
        {icon}
      </div>
    );
  }
  
  export default HeaderIcon;