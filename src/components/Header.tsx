import React from 'react'

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={` bg-blue-900`}>
            <div className={`h-16 px-4 space-x-4 container mx-auto text-white flex flex-nowrap  items-center justify-between  `}>
                {children}
            </div>
        </div>
    )
}

export default Header
