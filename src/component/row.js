import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style= {styles.kotak}>
          {this.props.children}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    kotak : {
        flexDirection: 'row',
    }
});

export default Row;
