import React, { useState } from 'react'
function useToggle(defaultValue ) {
  const [value, setValue] = useState(defaultValue)
  function toggleValue(val) {
     if (typeof val != 'boolean') {
        setValue((prevValue) => !prevValue)
      } else {
        setValue(val)
      }
  }
 
}

export default useToggle