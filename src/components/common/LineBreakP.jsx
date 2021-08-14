import React from 'react'

export default function LineBreakP({ className, strings }) {
  const texts = strings.split('\n').map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    )
  })
  return <p className={className}>{texts}</p>
}
