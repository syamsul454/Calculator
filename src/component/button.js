import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions,  } from 'react-native';

const screen = Dimensions.get("window") 
const buttonWidth = screen.width /4

class button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const buttonStyles = [styles.Button];
  if (this.props.size === "double" )  {
        buttonStyles.push(styles.buttonDouble)      
} 

if (this.props.color === "orange") {
    buttonStyles.push(styles.buttonColorTwo)
}

if (this.props.color === "grey"){
    buttonStyles.push(styles.buttonColorOne)
}
    return (
        
     <TouchableOpacity onPress={this.props.onPress} style = {buttonStyles}>
  <Text style= {styles.text}>{this.props.type}</Text>
     </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    Button : {
        flex: 1,
        height: Math.floor(buttonWidth -2),
        borderRadius: Math.floor(buttonWidth),
        backgroundColor:'#333333',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text : {
        fontSize: 25,
        color: '#fff'
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40,
       
      },

      buttonColorOne : {
          backgroundColor : "#a6a6a6"
      },
      buttonColorTwo : {
        backgroundColor: "#f09a36"
    }
});

export default button;
