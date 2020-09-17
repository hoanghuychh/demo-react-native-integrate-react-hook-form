import React, {FunctionComponent} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import normalize from 'react-native-normalize';

import {colors, images, texts} from '../../../common';
import {navigationRef} from '../../../lib/NavigationService';
import styles from './styles';
import {Form} from './components';

export interface Props {}

const SignUp: FunctionComponent<Props> = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={images.bg} style={styles.imgBg} />
        <InputScrollView style={styles.containerScroll} keyboardOffset={normalize(65)}>
          <View style={styles.wrapContent}>
            <Form />
            <TouchableOpacity
              style={styles.wrapLinkSignup}
              onPress={() => navigationRef.current?.navigate('Login')}>
              <Text style={[texts.regular14, {color: colors.dustyGray}]}>Bạn đã có tài khoản?</Text>
              <Text style={[texts.regular14, {color: colors.selectiveYellow}]}> Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </InputScrollView>
      </View>
    </>
  );
};

export default SignUp;
