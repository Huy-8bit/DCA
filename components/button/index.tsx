
import React from 'react'


interface PropsButton {
    className?: string;
    children: React.ReactNode;
}

const Box = ({ className, children }: PropsButton) => {
    return (
        <div
            className={`${className} px-6 py-3 text-[#fff] text-base font-medium w-fit`}
        >
            {children}
        </div>
    )
}

export default Box