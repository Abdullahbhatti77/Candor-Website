import React from 'react'

export default function Sample() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const openMenu = () => {
    setMenuVisible(true);
  }
  const closeMenu = () => {
    setMenuVisible(false);
  }
  const handleMenuClick = (event) => {
    setMenuVisible(true);
    setButtonPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <>
      {/* sidebar */}
      <div className="w-full text-black bg-white shadow-lg lg:w-64">
        <div className="p-3">
          <div className="relative flex items-center rounded-lg">
            <img src={videologo} alt="User" className="absolute w-5 h-5 rounded-full" />
            <div className="pl-10 font-normal cursor-pointer" onClick={handleMenuClick}>Main Greeting</div>
            <img src={threedots} alt="User" className="absolute right-0 h-5 cursor-pointer" onClick={threeDotsMenuClick} />
          </div>
        </div>
      </div>
      {menuVisible && (
        <div ref={menuRef}>
          <Menu closeMenu={closeMenu} buttonPosition={buttonPosition} />
        </div>
      )}
    </>
  )
}
