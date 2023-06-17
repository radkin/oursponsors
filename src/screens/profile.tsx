import React, {FC, useEffect} from 'react';

import {connect} from 'react-redux';
import {getUser, setUser} from '../store/actions/userAction';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {stateList} from '../staticData/StateList';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTypedDispatch, useTypedSelector} from '../store/store';
import { User } from "../models/User";
import { scale } from "react-native-size-matters";

interface TheUser {
  user: User;
}

interface TheLabel {
  label: string;
  value: string;
}

const Profile: FC = () => {
  const dispatch = useTypedDispatch();
  const userObjectData: TheUser = useTypedSelector(state => state.userObject);
  const {user} = userObjectData;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const genders: string[] = ['female', 'nonbinary', 'male'];

  const partyData: TheLabel[] = [
    {label: 'Democrat', value: 'D'},
    {label: 'Republican', value: 'R'},
    {label: 'Independent', value: 'I'},
  ];

  const getLabel = (myObjArray: TheLabel[], value: string): string => {
    for (let i = 0; i < myObjArray.length; i++) {
      if (myObjArray[i].value === value) {
        return myObjArray[i].label;
      }
    }
    return '';
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  if (user && user['party']) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Controller
            control={control}
            name="first_name"
            render={({field: {onChange, value}}) => (
              <View style={styles.textBox}>
                <TextInput
                  placeholder="First Name"
                  editable
                  numberOfLines={1}
                  maxLength={20}
                  onChangeText={text => onChange(text)}
                  value={value}
                  defaultValue={user['first_name']}
                  style={styles.textBox}
                />
              </View>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
            }}
          />
          {errors.first_name?.message ? (
            <Text style={styles.errorText}>{errors.first_name?.message}</Text>
          ) : null}

          <Controller
            control={control}
            name="last_name"
            render={({field: {onChange, value}}) => (
              <View style={styles.textBox}>
                <TextInput
                  placeholder="Last Name"
                  editable
                  numberOfLines={1}
                  maxLength={20}
                  onChangeText={text => onChange(text)}
                  value={value}
                  defaultValue={user['last_name']}
                  style={styles.textBox}
                />
              </View>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
            }}
          />
          {errors.last_name?.message ? (
            <Text style={styles.errorText}>{errors.last_name?.message}</Text>
          ) : null}

          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <View style={styles.textBox}>
                <TextInput
                  placeholder="Email"
                  editable
                  numberOfLines={1}
                  maxLength={40}
                  onChangeText={text => onChange(text)}
                  value={value}
                  defaultValue={user['email']}
                  style={styles.textBox}
                />
              </View>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter valid email.',
              },
            }}
          />
          {errors.email?.message ? (
            <Text style={styles.errorText}>{errors.email?.message}</Text>
          ) : null}

          <Controller
            control={control}
            name="gender"
            render={({field: {onChange}}) => (
              <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                contentContainerStyle={styles.container}>
                <SelectDropdown
                  data={genders}
                  defaultValue={user['gender']}
                  onSelect={selectedItem => {
                    onChange(selectedItem);
                  }}
                  defaultButtonText={'Gender'}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem;
                  }}
                  rowTextForSelection={item => {
                    return item;
                  }}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  renderDropdownIcon={isOpened => {
                    return (
                      <FontAwesome
                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                        color={'#444'}
                        size={18}
                      />
                    );
                  }}
                  dropdownIconPosition={'right'}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                  selectedRowStyle={styles.dropdown1SelectedRowStyle}
                  search
                  searchInputStyle={styles.dropdown1searchInputStyleStyle}
                  searchPlaceHolder={'Search here'}
                  searchPlaceHolderColor={'darkgrey'}
                  renderSearchInputLeftIcon={() => {
                    return (
                      <FontAwesome name={'search'} color={'#444'} size={18} />
                    );
                  }}
                />
              </ScrollView>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
            }}
          />
          {errors.gender?.message ? (
            <Text style={styles.errorText}>{errors.gender?.message}</Text>
          ) : null}

          <Controller
            control={control}
            name="party"
            render={({field: {onChange}}) => (
              <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                contentContainerStyle={styles.container}>
                <SelectDropdown
                  data={partyData}
                  defaultValue={{
                    label: getLabel(partyData, user['party']),
                    value: user['party'],
                  }}
                  onSelect={selectedItem => {
                    onChange(selectedItem.value);
                  }}
                  defaultButtonText={'Select party'}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem.label;
                  }}
                  rowTextForSelection={item => {
                    return item;
                  }}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  renderDropdownIcon={isOpened => {
                    return (
                      <FontAwesome
                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                        color={'#444'}
                        size={18}
                      />
                    );
                  }}
                  dropdownIconPosition={'right'}
                  dropdownStyle={styles.dropdown3DropdownStyle}
                  rowStyle={styles.dropdown3RowStyle}
                  selectedRowStyle={styles.dropdown1SelectedRowStyle}
                  renderCustomizedRowChild={item => {
                    return (
                      <View style={styles.dropdown3RowChildStyle}>
                        <Text style={styles.dropdown3RowTxt}>{item.label}</Text>
                      </View>
                    );
                  }}
                  search
                  searchInputStyle={styles.dropdown3searchInputStyleStyle}
                  searchPlaceHolder={'Search here'}
                  searchPlaceHolderColor={'#F8F8F8'}
                  renderSearchInputLeftIcon={() => {
                    return (
                      <FontAwesome name={'search'} color={'#FFF'} size={18} />
                    );
                  }}
                />
              </ScrollView>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
            }}
          />

          <Controller
            control={control}
            name="state"
            render={({field: {onChange}}) => (
              <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                contentContainerStyle={styles.container}>
                <SelectDropdown
                  data={stateList}
                  defaultValue={{
                    label: getLabel(stateList, user['state']),
                    value: user['state'],
                  }}
                  onSelect={selectedItem => {
                    onChange(selectedItem.value);
                  }}
                  defaultButtonText={'Select state'}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem.label;
                  }}
                  rowTextForSelection={item => {
                    return item;
                  }}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  renderDropdownIcon={isOpened => {
                    return (
                      <FontAwesome
                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                        color={'#444'}
                        size={18}
                      />
                    );
                  }}
                  dropdownIconPosition={'right'}
                  dropdownStyle={styles.dropdown3DropdownStyle}
                  rowStyle={styles.dropdown3RowStyle}
                  selectedRowStyle={styles.dropdown1SelectedRowStyle}
                  renderCustomizedRowChild={item => {
                    return (
                      <View style={styles.dropdown3RowChildStyle}>
                        <Text style={styles.dropdown3RowTxt}>{item.label}</Text>
                      </View>
                    );
                  }}
                  search
                  searchInputStyle={styles.dropdown3searchInputStyleStyle}
                  searchPlaceHolder={'Search here'}
                  searchPlaceHolderColor={'#F8F8F8'}
                  renderSearchInputLeftIcon={() => {
                    return (
                      <FontAwesome name={'search'} color={'#FFF'} size={18} />
                    );
                  }}
                />
              </ScrollView>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
            }}
          />
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(formValue => dispatch(setUser(formValue)))}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.noProfile}>
        <Text>Unable to display profile</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    width: '90%',
  },
  textBox: {
    backgroundColor: '#fafafa',
    borderRadius: scale(10),
    paddingStart: scale(5),
    borderColor: '#e4e4e4',
    borderWidth: scale(1),
    alignSelf: 'stretch',
    marginVertical: scale(7),
    fontSize: scale(10),
  },
  errorText: {
    color: 'red',
  },
  dropdown: {
    borderColor: '#e4e4e4',
    backgroundColor: '#fafafa',
    marginVertical: scale(10),
  },
  dropdownPlaceholder: {
    color: '#c7c7c8',
  },
  button: {
    width: '100%',
    backgroundColor: '#517CFF',
    borderRadius: scale(10),
    paddingVertical: scale(10),
    marginVertical: scale(20),
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: scale(10),
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: scale(50),
    backgroundColor: '#FFF',
    borderRadius: scale(8),
    borderWidth: scale(1),
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left', fontSize: scale(10)},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
  dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: scale(8),
    borderBottomWidth: scale(1),
    borderBottomColor: '#444',
  },

  dropdown2BtnStyle: {
    width: '80%',
    height: scale(50),
    backgroundColor: '#444',
    borderRadius: scale(8),
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderRadius: scale(12),
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2SelectedRowStyle: {backgroundColor: 'rgba(255,255,255,0.2)'},
  dropdown2searchInputStyleStyle: {
    backgroundColor: '#444',
    borderBottomWidth: scale(1),
    borderBottomColor: '#FFF',
  },

  dropdown3BtnStyle: {
    width: '80%',
    height: scale(50),
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: scale(1),
    borderRadius: scale(8),
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(18),
  },
  dropdown3BtnImage: {width: scale(45), height: scale(45), resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: scale(12),
    marginHorizontal: scale(12),
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: scale(50),
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: scale(18),
  },
  dropdownRowImage: {width: scale(45), height: scale(45), resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: scale(12),
    marginHorizontal: scale(12),
  },
  dropdown3searchInputStyleStyle: {
    backgroundColor: 'slategray',
    borderBottomWidth: scale(1),
    borderBottomColor: '#FFF',
  },
  noProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
