import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation, NavigationStyles } from '@exponent/ex-navigation';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@exponent/vector-icons';
import Colors from '../constants/Colors';
import SignupForm from '../components/SignupForm';

import { authActions } from '../state/actions';

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupForm />
      </View>
    );
  }
}

SignupScreen.route = {
  navigationBar: {
    visible: false
  }
};

SignupScreen.propTypes = {
  logout: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purple,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});

const logout = authActions.logout;

export default connect(
  null,
  { logout }
)(SignupScreen);
