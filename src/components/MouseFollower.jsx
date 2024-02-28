
export const MouseFollower = ({enable,position,turn}) => {

    const style = {div: {
      display: `${ enable ? 'flex' : 'none'}`,
      position: 'absolute',
      justifyContent:'center',
      alignItems:'center',
      //backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none', 
      left: -20,
      top: -20,
      width: 40,
      height: 40, 
      transform: `translate(${position.x}px, ${position.y}px)`
    }}

    return (
        <div style={ style.div }>
         <p style={{fontSize:'40px'}}> { turn } </p> 
         </div>
    )
}