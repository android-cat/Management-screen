import React from "react";
import Box from '@mui/material/Box';
import "../../time.css";

class Clock extends React.Component {
    timerID
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    };
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    };
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    };
  
    tick() {
      this.setState({
        date: new Date()
      });
    };
    timetext={
        fontSize: "50px"
    };
    render() {
      return (
            <div className="time" style={this.timetext}>
                <Box component="span" sx={{ 
                        p: 10,
                        border: 1
                    }}>
                        {this.state.date.toLocaleTimeString()}
                </Box>
            </div>
      );
    }
  }
  export default Clock;