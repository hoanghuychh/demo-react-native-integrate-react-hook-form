import React, {FunctionComponent, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import styles from '../styles';

import {images, texts} from '../../../../common';

import {InputRegular, Button} from '../../../../components';
import {actionGetRegister} from '../../../../store/authentication/actions';
import {actionSetLoading} from '../../../../store/common/actions';
import {push} from '../../../../lib/NavigationService';

export interface Props {}

type FormData = {
  username: string | null;
  email: string | null;
  password: string | null;
  rePassword: string | null;
};
const Form: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const {register, errors, setValue, getValues, control, handleSubmit} = useForm<FormData>({
    defaultValues: {
      username: null,
      email: null,
      password: null,
      rePassword: null,
    },
    mode: 'all',
  });

  useEffect(() => {
    register('username');
    register('email');
    register('password');
    register('rePassword');
  }, [register]);
  const onSubmit = async (data: any) => {
    console.log('====================================');
    console.log('data', data);
    console.log('====================================');
    if (getValues('username')) {
      dispatch(
        actionGetRegister({
          data: {
            username: getValues('username'),
            email: getValues('email'),
            password: getValues('password'),
            secondaryPassword: getValues('secondaryPassword'),
          },
        }),
      );
    }
  };

  return (
    <>
      <View style={styles.wrapTextInput}>
        <Controller
          control={control}
          name="username"
          rules={{
            required: {value: true, message: '* Please enter your username *'},
            minLength: {value: 5, message: '* Account should be 5-20 characters in length! *'},
            maxLength: {value: 20, message: '* Account should be 5-20 characters in length! *'},
            pattern: {value: new RegExp(/^[a-zA-Z0-9_-]*$/), message: '* Invalid character *'},
          }}
          render={({onChange, value}) => (
            <InputRegular
              placeholder="username"
              icon={{
                default: images.iconUser,
                focus: images.iconUser2,
              }}
              onChangeText={(val: string) => {
                onChange(val);
                setValue('username', val);
              }}
              value={value}
            />
          )}
        />
        <View style={styles.wrapError}>
          {errors.username && (
            <Text style={[texts.regular12, styles.error]}>{errors.username.message}</Text>
          )}
        </View>
      </View>
      <View style={styles.wrapTextInput}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: {value: true, message: '* Please enter your email! *'},
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '* InvalidEmail *',
            },
          }}
          render={({onChange, value}) => (
            <InputRegular
              placeholder="Email"
              icon={{
                default: images.iconEmail,
                focus: images.iconEmail2,
              }}
              onChangeText={(val: string) => {
                onChange(val);
                setValue('email', val);
              }}
              value={value}
            />
          )}
        />
        <View style={styles.wrapError}>
          {errors.email && (
            <Text style={[texts.regular12, styles.error]}>{errors.email.message}</Text>
          )}
        </View>
      </View>
      <View style={styles.wrapTextInput}>
        <Controller
          control={control}
          name="password"
          rules={{
            required: {value: true, message: '* Required password ! *'},
            pattern: {
              value: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g),
              message:
                '* Password should be longer than 8 characters, include numbers, uppercase and lowercase letters! *',
            },
          }}
          render={({onChange, value}) => (
            <InputRegular
              placeholder="Password"
              secureTextEntry
              icon={{
                default: images.iconLock,
                focus: images.iconLock2,
              }}
              onChangeText={(val: string) => {
                onChange(val);
                setValue('password', val);
              }}
              value={value}
            />
          )}
        />
        <View style={styles.wrapError}>
          {errors.password && (
            <Text style={[texts.regular12, styles.errorPassword]}>{errors.password.message}</Text>
          )}
        </View>
      </View>
      <View style={styles.wrapTextInput}>
        <Controller
          control={control}
          name="rePassword"
          rules={{
            required: {value: true, message: '* Required repassword! *'},
            pattern: {
              value: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g),
              message:
                '* Password should be longer than 8 characters, include numbers, uppercase and lowercase letters! *',
            },
            validate: (value) => {
              if (value === getValues('password')) return true;
              return 'Confirm password incorrect';
            },
          }}
          render={({onChange, value}) => (
            <InputRegular
              placeholder="rePassword"
              secureTextEntry
              icon={{
                default: images.iconLock,
                focus: images.iconLock2,
              }}
              onChangeText={(val: string) => {
                onChange(val);
                setValue('rePassword', val);
              }}
              value={value}
            />
          )}
        />
        <View style={styles.wrapError}>
          {errors.rePassword && (
            <Text style={[texts.regular12, styles.errorPassword]}>{errors.rePassword.message}</Text>
          )}
        </View>
      </View>
      <View style={styles.wrapButton}>
        <Button round title="Signup" type={2} onPress={handleSubmit(onSubmit)} />
      </View>
    </>
  );
};

export default Form;
