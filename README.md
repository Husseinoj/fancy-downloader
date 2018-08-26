
# react-native-fancy-downloader
## Demo
![](https://github.com/Husseinoj/fancy-downloader/master/demo.gif)

## Getting started

`$ npm install react-native-fancy-downloader --save`

### Mostly automatic installation

`$ react-native link react-native-fancy-downloader`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-fancy-downloader` and add `RNFancyDownloader.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNFancyDownloader.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNFancyDownloaderPackage;` to the imports at the top of the file
  - Add `new RNFancyDownloaderPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-fancy-downloader'
  	project(':react-native-fancy-downloader').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-fancy-downloader/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-fancy-downloader')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNFancyDownloader.sln` in `node_modules/react-native-fancy-downloader/windows/RNFancyDownloader.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Fancy.Downloader.RNFancyDownloader;` to the usings at the top of the file
  - Add `new RNFancyDownloaderPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNFancyDownloader from 'react-native-fancy-downloader';

// TODO: What to do with the module?
RNFancyDownloader;
```
  
