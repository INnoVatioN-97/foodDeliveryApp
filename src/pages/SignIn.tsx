import React, {useCallback, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    Alert.alert('응애!');
  }, []);

  const canGoNext = email && password;

  return (
    <View style={styles.inputWrapper}>
      <View>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeEmail}
          placeholder="이메일을 입력하세요."
        />
      </View>
      <View>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangePassword}
          placeholder="비밀번호를 입력하세요."
        />
      </View>

      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            !canGoNext
              ? styles.loginButton
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          }
          disabled={!canGoNext}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable>
          <Text>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {padding: 20},
  textInput: {padding: 5, borderBottomWidth: StyleSheet.hairlineWidth},
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonZone: {alignItems: 'center'},
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {backgroundColor: 'blue'},
  loginButtonText: {color: 'white', fontSize: 16},
});

export default SignIn;
