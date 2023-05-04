import React from 'react'

export default function Sample() {
    const [dotsMenuVisible, setDotsMenuVisible] = useState(false);
    const openThreedostMenu = () => {
        setDotsMenuVisible(true);
    }
    const closeThreedostMenu = () => {
        setDotsMenuVisible(false);
    }
    return (
        <>
            <div className="relative flex items-center rounded-lg">
                <img src={videologo} alt="User" className="absolute w-5 h-5 rounded-full" />
                <div className="pl-10 font-normal cursor-pointer" onClick={openMenu}>Main Greeting</div>
                <img src={threedots} alt="User" className="absolute right-0 h-5 cursor-pointer" onClick={openThreedostMenu} />
            </div>
            {dotsMenuVisible && <ThreeDotsMenu />}
        </>
    )
}
