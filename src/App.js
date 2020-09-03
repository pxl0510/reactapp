import React from 'react'; 
import {withRouter} from 'react-router-dom';
import SiderDemo from './layout'
@withRouter
class App extends React.Component{

  render(){
    return <SiderDemo/>
  }
 
}

 

export default App;
