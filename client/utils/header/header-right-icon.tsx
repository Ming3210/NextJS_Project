function HeaderRightIcon({icon, onClick}:any) {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    }
    return (
      <div className="header__ricon w-[40px] h-[40px] flex items-center justify-center" onClick={handleClick}>
        {icon}
      </div>
    );
  }
  
  export default HeaderRightIcon;