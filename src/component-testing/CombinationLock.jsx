import React, { useRef, useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function CombinationLock({ combination = "4893" }) {
  const [locked, setLocked] = useState(true);

  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();

  const submitHandler = () => {
    if (
      ref1.current.value === combination[0] &&
      ref2.current.value === combination[1] &&
      ref3.current.value === combination[2] &&
      ref4.current.value === combination[3]
    ) {
      setLocked(false);
    }
  };

  return (
    <>
      <div>{locked ? <LockIcon /> : <LockOpenIcon />}</div>
      <div>
        <input
          data-testid="input1"
          ref={ref1}
          type="number"
          name="num1"
          id="num1"
          required
          minLength="1"
          maxLength="1"
          size="1"
        />
        <input
          data-testid="input2"
          ref={ref2}
          type="number"
          name="num2"
          id="num2"
          required
          minLength="1"
          maxLength="1"
          size="1"
        />
        <input
          data-testid="input3"
          ref={ref3}
          type="number"
          name="num3"
          id="num3"
          required
          minLength="1"
          maxLength="1"
          size="1"
        />
        <input
          data-testid="input4"
          ref={ref4}
          type="number"
          name="num4"
          id="num4"
          required
          minLength="1"
          maxLength="1"
          size="1"
        />
      </div>
      <div>
        <button data-testid="submit-button" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </>
  );
}

export default CombinationLock;
