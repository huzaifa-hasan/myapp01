import React from 'react';
import './App.css';

const headerContentStyle={
  margin: 10,
  color: '#2020b0',
  alignContent: 'center'
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      isTimerActive: true,
      laps: []
    };
  }

  Timer = () => {
    let intervalId;
    if(this.state.isTimerActive){
      intervalId = setInterval(()=>{
      this.setState({time: new Date().toLocaleTimeString()})}, 1000);
    }
     
    return <div style={{border: '2px groove #bbbbff', display: 'flex', justifyContent:'center', alignContent: 'center',padding:10 }}>
      <div style={{marginLeft:5, alignContent: 'center'}}>Time: {this.state.time}</div>
      <button style={{marginLeft:20}} onClick={()=>{
        clearInterval(intervalId);
        let lap = this.state.laps;
        this.setState({
          isTimerActive: false,
          laps: lap.concat(this.state.time)
        });
      }}>Stop timer</button>
      <button style={{marginLeft:20}} onClick={()=>{
        this.setState({isTimerActive: true});
      }}>Start timer</button>
    </div>
  }

  laps = () => {
    return this.state.laps.length ? (<div style={{display:'flex', justifyContent: 'center'}}>
      <table>
        <tr>
          <th>Stopped at</th>
          <th>Time</th>
        </tr>
      {this.state.laps.map((lap, index)=>{
        let color = index%2? '#c0c6db71':'';
        return <div>
        <tr style={{backgroundColor:color}}>
          <td>{index}</td>
          <td>{lap}</td>
        </tr>
        </div>
      })}
      </table>
    </div>) : null;
  }

  button1 = ()=>{
    return <div style={{display:'flex',justifyContent: 'center', margin: 10}}>
      <button style={{fontSize: '25px', backgroundColor: '#4040a0', color: 'white'}}>Custom Button</button>
      <button style={{border: '2px dashed white', borderRadius: '15px'}}>Custom Button</button>
      <button style={{hover: {
        backgroundColor: 'blue'
      }}}>Custom Button</button>
    </div> 
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.time !== nextState.time && this.state.isTimerActive)
      return true;
    else if(this.state.laps.length !== nextState.laps.length)
      return true;
    else
      return false;
  }
  
  render(){
    return (
      <div class='body'>
      <div class='header' style={{display: 'flex', justifyContent: 'center', alignContent: 'center', backgroundColor: '#c9ccef'}}>
        <h1 class="headerContent">Sample text</h1>
        <h6 class="headerContent">2nd text</h6>
        <h6 style={headerContentStyle}>3rd text</h6>
      </div>
      {this.Timer()}
      {this.laps()}
      {this.button1()}
      <h2>footer text</h2>
      </div>
    );
  }
  
}

export default App;
