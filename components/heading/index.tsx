import React from 'react'

const Heading = ({ text, className }: {
  text: string;
  className?: string;
}) => {
  return (
    <h2 className={`${className} heading tracking-[-0.96px] lg:tracking-[-1.96px] text-center`}>{text}</h2>
  )
}

export default Heading