import React from "react";

function Keypad() {
  return (
    <div>
      <form>
        <input
          type="password"
          onChange={(e) => {
            console.log("Entering password...");
          }}
        ></input>
      </form>
    </div>
  );
}

export default Keypad;
