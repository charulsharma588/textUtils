import React from 'react'

export default function Alert(props) {
    const Capitaliza = (word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className="container" style={{height:'50px'}}>
   {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong>{Capitaliza(props.alert.type)}</strong>:{props.alert.message}

  </div>}
  </div>
  )
}
