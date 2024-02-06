import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    marginVertical: 16,
    paddingTop: 36,
  },
  imageView: {
    padding: 12,
  },
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  titulo: {
    padding: 4,
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C4C50',
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: 18,
    padding: 8,
    fontWeight: '600',
    color: '#1C4C50',
  },
  inputLoginView: {
    marginTop: 14,
    width: '85%',
  },
  labelInputField: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 6,
    color: '#1C4C50',
  },
  inputField: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#1C4C50',
    color: '#2d9c9f',
  },
  forgotPasswordView: {
    width: '85%',
    paddingBottom: 20,
  },
  forgotPasswordText: {
    paddingTop: 4,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 14,
    color: '#1C4C50',
  },
  buttonSignInTouchable: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#1C4C50',
    borderRadius: 8,
    width: '85%',
  },
  buttonSignInText:{
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  signUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  signUpText: {
    marginRight: 8,
    fontSize: 14,
    color: '#1C4C50',
  },
  signUpLink: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1C4C50',
  },
  createdBy: {
    marginTop: 64,
    alignSelf: 'center',
    fontSize: 12,
    color: '#71B7A4',
  },
});

