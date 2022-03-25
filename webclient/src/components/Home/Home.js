import React from "react";
import classes from "./index.css";

const Home = () => {
    return ( <
        div >
        <
        div class = "container " >
        <
        aside >
        div class = "top" >
        <
        div class = "logo" >
        <
        img src = "./images/logo.png " >
        <
        h2 > Smart < span class = "danger " > Home < /span></h
        2 >
        <
        /div> <
        div class = "close"
        id = "close-btn " >
        <
        span class = "material-icons-sharp " > close < /span> < /
        div > <
        /div> <
        div class = "sidebar" >
        <
        a href = "#"
        class = "active" >
        <
        span class = "material-icons-sharp" > home < /span> <
        h3 > Home < /h3> < /
        a > <
        a href = "#" >
        <
        span class = " material-icons-sharp " > lightbulb < /span> <
        h3 > Lights < /h3> < /
        a > <
        a href = "# " >
        <
        span class = "material-icons-sharp " > thermostat < /span> <
        h3 > Temperature < /h3> < /
        a > <
        a href = "# " >
        <
        span class = "material-icons-sharp " > notifications < /span> <
        h3 > Alarm < /h3> <
        span class = "alarm-count" > 1 < /span> < /
        a > <
        a href = " # " >
        <
        span class = "material-icons-sharp " > local_fire_department < /span> <
        h3 > Gas < /h3> < /
        a > <
        a href = "# " >
        <
        span class = "material-icons-sharp " > settings < /span> <
        h3 > Settings < /h3> < /
        a > <
        a href = "# " >
        <
        span class = "material-icons-sharp " > logout < /span> <
        h3 > Logout < /h3> < /
        a > <
        /div> < /
        aside > <
        main >
        <
        h1 > Dashboard < /h1> <
        div class = "date" >
        <
        input type = "date" >
        <
        /div> <
        div class = "insights" >
        <
        div class = "temparute" >
        <
        span class = "material-icons-sharp " > thermostat < /span> <
        div class = "middle" >
        <
        div class = "left" >
        <
        h3 > Avg House Temp < /h3> < /
        div > <
        div class = "progress" >
        <
        div class = "text" >
        <
        h1 > 25 & deg; C < /h1> < /
        div > <
        /div> < /
        div > <
        small class = ""
        text - muted > Last 5 Minutes < /small> < /
        div >

        <
        div class = "humidity" >
        <
        span class = "material-icons-sharp" > water_drop < /span> <
        div class = "middle" >
        <
        div class = "left" >
        <
        h3 > Humidity House < /h3> < /
        div > <
        div class = "progress" >
        <
        div class = "text" >
        <
        h1 > 60 % < /h1> < /
        div > <
        /div> < /
        div > <
        small class = ""
        text - muted > Last 5 Minutes < /small> < /
        div >

        <
        div class = "device" >
        <
        span class = " material-icons-sharp " > lightbulb < /span> <
        div class = "middle" >
        <
        div class = "left" >
        <
        h3 > 0 / 5 < /h3> < /
        div > <
        div class = "progress" >
        <
        div class = "text" >
        <
        h1 > 25 & deg; C < /h1> < /
        div > <
        /div> < /
        div > <
        small class = ""
        text - muted > Last 5 Minutes < /small> < /
        div > <
        /div> <
        div class = "rooms" >
        <
        h2 > Rooms / Devices On < /h2> <
        table >
        <
        thead >
        <
        tr >
        <
        th > Rooms < /th> <
        th > Lights < /th> <
        th > AC < /th> <
        th > Fan < /th> <
        th > Alarm < /th> < /
        tr > <
        /thead> <
        tbody >
        <
        tr >
        <
        td > Living Room < /td> <
        td > 0 / 2 < /td> <
        td > 1 / 1 < /td> <
        td > 1 / 2 < /td> <
        td > 1 / 2 < /td> < /
        tr > <
        tr >
        <
        td > Work Room < /td> <
        td > 0 / 2 < /td> <
        td > 1 / 1 < /td> <
        td > 1 / 2 < /td> <
        td > 1 / 2 < /td> < /
        tr > <
        tr >
        <
        td > Kitchen < /td> <
        td > 0 / 2 < /td> <
        td > 1 / 1 < /td> <
        td > 1 / 2 < /td> <
        td > 1 / 2 < /td> < /
        tr > <
        tr >
        <
        td > Bedroom 1 < /td> <
        td > 0 / 2 < /td> <
        td > 1 / 1 < /td> <
        td > 1 / 2 < /td> <
        td > 1 / 2 < /td> < /
        tr > <
        tr >
        <
        td > Bedroom 2 < /td> <
        td > 0 / 2 < /td> <
        td > 1 / 1 < /td> <
        td > 1 / 2 < /td> <
        td > 1 / 2 < /td> < /
        tr > <
        tr >
        <
        td > Bathroom 1 < /td> <
        td > 0 / 2 < /td> <
        td > 1 / 1 < /td> <
        td > 1 / 2 < /td> <
        td > 1 / 2 < /td> < /
        tr > <
        tr >
        <
        td > Bathroom 2 < /td> <
        td > 0 / 2 < /td> <
        td > 1 / 1 < /td> <
        td > 1 / 2 < /td> <
        td > 1 / 2 < /td> < /
        tr > <
        tr >
        <
        td > Kid Room < /td> <
        td > 0 / 2 < /td> <
        td > 1 / 1 < /td> <
        td > 1 / 2 < /td> <
        td > 1 / 2 < /td> < /
        tr > <
        /tbody> < /
        table > <
        /div> < /
        main > <
        div class = "right" >
        <
        div class = "top" >
        <
        button id = "menu-btn" >
        <
        span class = "material-icons-sharp" > menu < /span> < /
        button > <
        div class = "wifi" >
        <
        span class = "material-icons-sharp" > wifi < /span> < /
        div > <
        p > Connected < /p> <
        div class = "profile" >
        <
        div class = "info" >
        <
        p > Hey, < b > Name < /b></p >
        <
        small class = "text-muted" > Admin < /small> < /
        div > <
        div class = "profile-photo" >
        <
        img src = "./images/profile.png" >
        <
        /div> < /
        div > <
        /div> <
        div class = "control-device" >
        <
        h2 > Devices < /h2> <
        div class = "controls" >
        <
        div class = "control" >
        <
        span class = " material-icons-sharp " > lightbulb < /span> <
        h2 > Light 1 < /h2> <
        div class = "turn-on-off" >
        <
        h5 class = "active" > On < /h5> <
        h5 > Off < /h5> < /
        div > <
        /div> <
        div class = "control" >
        <
        span class = " material-icons-sharp " > lightbulb < /span> <
        h2 > Light 2 < /h2> <
        div class = "turn-on-off" >
        <
        h5 class = "active" > On < /h5> <
        h5 > Off < /h5> < /
        div > <
        /div> <
        div class = "control" >
        <
        span class = "material-icons-sharp" > ac_unit < /span> <
        h2 > AC 1 < /h2> <
        div class = "turn-on-off" >
        <
        h5 class = "active" > On < /h5> <
        h5 > Off < /h5> < /
        div > <
        /div> <
        div class = "control" >
        <
        span class = "material-icons-sharp" > ac_unit < /span> <
        h2 > AC 2 < /h2> <
        div class = "turn-on-off" >
        <
        h5 class = "active" > On < /h5> <
        h5 > Off < /h5> < /
        div > <
        /div> <
        div class = "control" >
        <
        span class = "material-icons-sharp" > wind_power < /span> <
        h2 > Fan < /h2> <
        div class = "turn-on-off" >
        <
        h5 class = "active" > On < /h5> <
        h5 > Off < /h5> < /
        div > <
        /div> < /
        div > <
        /div> <
        div class = "warning" >
        <
        h2 > Warning < /h2> <
        div class = "item" >
        <
        div class = "icon" >
        <
        span class = "material-icons-sharp" > local_fire_department < /span> < /
        div > <
        div class = "right" >
        <
        div class = "info" >
        <
        h3 > Gas warning < /h3> <
        small class = "text-muted" > Last 5 minutes < /small> < /
        div > <
        div class = "icon-warn" >
        <
        span class = "material-icons-sharp" > warning < /span> < /
        div > <
        /div> < /
        div > <
        div class = "item" >
        <
        div class = "icon" >
        <
        span class = "material-icons-sharp " > notifications < /span> < /
        div > <
        div class = "right" >
        <
        div class = "info" >
        <
        h3 > Alarm warning < /h3> <
        small class = "text-muted" > Last 5 minutes < /small> < /
        div > <
        div class = "icon-warn" >
        <
        span class = "material-icons-sharp" > volume_up < /span> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >
    );
};