import React, { Component } from 'react';
import { StyleSheet,View, StatusBar,SafeAreaView, Text} from 'react-native';
import Row from './src/component/row'
import Button from './src/component/button'
import calculator, {initialState} from './src/controllers/calculator'
class App extends Component {
  
    state = initialState
  

    handleTap = (type, value) => {
      this.setState(state => calculator(type, value, state));
    };
 
  Ac = () => {
    this.setState({
      currentValue: 0
    })
  }

  render() {
    return (
      <View style = {styles.container}>
        <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <Text style={styles.value}>
        {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
      <Row>
        < Button
         type = "AC" 
         color = "grey"
         onPress={() => this.handleTap("clear")}
         />
        < Button
         type = "+/-"
         color = "grey"
         onPress={() => this.handleTap("posneg")}
         />
        < Button 
        type = "%" 
        color = "grey"
        onPress={() => this.handleTap("percentage")}
        />
        < Button 
        type = "/" 
        color = "orange"
        onPress={() => this.handleTap("operator", "/")}
        />
      </Row>
      <Row>
        < Button type = "7" onPress = {() => this.handleTap("number", 7)} />
        < Button type = "8" onPress = {() => this.handleTap("number", 8)} />
        < Button type = "9" onPress = {() => this.handleTap("number", 9)} />
        < Button 
        type = "x" onPress={() => this.handleTap("operator", "*")}
        color = "orange"
        onPress={() => this.handleTap("operator", "*")}

        />
      </Row>
      <Row>
        < Button type = "4" onPress = {() => this.handleTap("number", 4)} />
        < Button type = "5" onPress = {() => this.handleTap("number", 5)} />
        < Button type = "6" onPress = {() => this.handleTap("number", 6)} />
        < Button 
        type = "-" 
        color = "orange"
        onPress={() => this.handleTap("operator", "-")}
        />
      </Row>
      <Row>
        < Button type = "1" onPress = {() => this.handleTap("number", 1)}/>
        < Button type = "2" onPress = {() => this.handleTap("number", 2)} />
        < Button type = "3" onPress = {() => this.handleTap("number", 3)} />
        < Button
         type = "+" 
         color = "orange"
         onPress={() => this.handleTap("operator", "+")}
         />
      </Row>
      <Row>
        < Button 
        type = "0"
        size = "double"
        onPress = {() => this.handleTap("number", 0)}
        />
        < Button type = "." onPress={() => this.handleTap("number", ".")} />
        < Button
         type = "="
         color = "orange"
         onPress={() => this.handleTap("equal")}
         />
      </Row>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : "#202020",
    justifyContent: "flex-end",
  },

  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
})

  
export default App;
