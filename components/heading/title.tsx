import React from 'react'

const Title = ({ text, className }: {
  text: string;
  className?: string;
}) => {
  return (
    <h1 className={`title ${className}`}>
      {text}
    </h1>
  )
}

export default Title