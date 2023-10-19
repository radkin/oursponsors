# Up and Running

## Starting your development environment

### Checklist of requirements

- backend server running
- run `yarn` to install node_modues
- make sure you have vulkan installed. If not, remove the last bit of the example command.
- make sure you have installed emulators in Android Studio

### Running the emulator
`emulator -avd Galaxy_S21_5G_API_33 -feature -Vulkan`
### Deploying code to your emulator
`npx react-native start`

select "a" for Android

## Enabling your device

[react native devices](https://reactnative.dev/docs/running-on-device)

## Troubleshooting

### Emulator issues
**See which emulators are available:**

`emulator -avd -list-avds`

**Get extended logs from your emulator**

```bash
npx react-native log-android
adb logcat
```

**Clear cache and watchman**

```bash
watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-*
```

**Bundle commands**

Note: _this should not be needed_

```bash
rm ./android/app/src/main/assets/index.android.bundle
npx react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

**Bundle creation without destination**

```bash
npx react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle
```

**Command-line APK creation**

```bash
./gradlew assembleRelease
```
