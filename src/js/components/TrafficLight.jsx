import React, { useState } from "react";


const TrafficLight = (props) => {
    const [glowy, SetGlowy] = useState ("red") 
    return (
        <div className="trafficLight">
            <div className="stick"></div>
            <div className="lightgroup">
                <div
                    className={glowy == "red" ? "red light glowy" : "red light"} onClick={() => SetGlowy("red")}>
                </div>
                <div
                    className={glowy == "yellow" ? "yellow light glowy" : "yellow light"} onClick={() => SetGlowy("yellow")}>
                </div>
                <div
                    className={glowy == "green" ? "green light glowy" : "green light"} onClick={() => SetGlowy("green")}>
                </div>
            </div>
        </div>
    );
};

export default TrafficLight;