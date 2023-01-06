import React from "react";
import useWindowSize from "../useWindowSize";

function WindowHook() {
  const { width } = useWindowSize();
  return (
    <div>
      <div>{width}</div>
      {width > 800 && <div>This is Result</div>}
      <br />
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        reprehenderit distinctio quod soluta similique inventore consequatur
        tenetur aliquid? Nisi itaque assumenda inventore ad perferendis
        voluptas? Delectus, itaque! Voluptates, debitis magnam.
      </div>
    </div>
  );
}

export default WindowHook;
