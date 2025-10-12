// import React, { forwardRef } from 'react'

// function UserInputForwardRef({props, inputRef}) {
//   return (
//     <div>
//         <input type="text" ref={inputRef}/>
      
//     </div>
//   )
// }

// export default forwardRef(UserInputForwardRef);

// the above code is old way to use forwardRef


const UserInputForwardRef = ({ inputRef }) => {

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
export default UserInputForwardRef; 