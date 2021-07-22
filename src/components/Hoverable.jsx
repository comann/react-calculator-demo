import * as React from 'react'


export default function HoverContainer({children}) {
  const [isHovering, setIsHovering] = React.useState(false);

  return <div  
    onMouseEnter={() => setIsHovering(true)} 
    onMouseLeave={() => setIsHovering(false)} 
    style={{ 
      backgroundColor: isHovering ? 'rgba(0,0,255,0.3)' : undefined,
      cursor: isHovering ? 'pointer' : undefined
    }}  
  >
    {children} 
  </div>
}