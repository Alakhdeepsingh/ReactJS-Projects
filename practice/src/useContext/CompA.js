import React from "react";
import CompB from "./CompB";

const CompA = () => {
  return (
    <div>
      Hello
      <CompB />;
    </div>
  );
};
export default CompA;

//useContext :
// SourceBuffer, abh mann lo ki 5 coponenets hai ,
// A,B,C,D,E and essa mann lo i A parent compnenet hi like App.js and
// B componenet ke andar C componenet hai and C ke andar D hai and D ke andar E component hai
// Abh mann lo ki A se data E mai bhejna hoo tho kesse bhejhoge props se bhejhoge
// lekin phele A se B mai then B se C, kyoki C componenet B ke andar hai mai then C se D mai kyoki D componenet C ke andar and then D se E mai kyoki E componenet D ke andar hai props se bhejna hogha isse
// props drilling khate hai abh agar hamm seedha A to E mai bhejna chahte hai tho yaa tho hamm redux ka use karenege yaa phir useContext ka use karenge
