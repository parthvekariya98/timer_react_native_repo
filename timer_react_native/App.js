import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class TimerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      running: false
    };
    this.interval = null;
  }

  startTimer = () => {
    this.setState({ running: true });
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 10 // Increment time by 10 milliseconds
      }));
    }, 10); // Update every 10 milliseconds
  };

  stopTimer = () => {
    this.setState({ running: false });
    clearInterval(this.interval);
  };

  resetTimer = () => {
    this.setState({ time: 0, running: false });
    clearInterval(this.interval);
  };

  formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}:${milliseconds < 100 ? '0' : ''}${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  render() {
    const { time, running } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.timer}>{this.formatTime(time)}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={running ? this.stopTimer : this.startTimer}
        >
          <Text style={styles.buttonText}>
            {running ? 'Stop' : 'Start'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    fontSize: 60,
    marginBottom: 40
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20
  }
});

export default TimerApp;