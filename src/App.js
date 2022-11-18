import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
// import React from 'react';

// import Home from "./pages/Home";
// import Customer from "./pages/Customer";
// import Restaurateur from "./Restaurateur";
// import './App.css';

// const App = () => (
//   <div>
//     <Home />
//     <Customer />
//     <Restaurateur />
    
//   </div>
// );

// export default App;
