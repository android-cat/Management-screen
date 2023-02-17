import React from "react";
import GenericTemplate from "../templates/GenericTemplate.tsx";
import Clock from"../atoms/clock.tsx";
function HomePage(){
    return(
        <GenericTemplate title="トップページ">
            <Clock/>
        </GenericTemplate>
    )
};
export default HomePage;