import { NativeModules } from 'react-native';
const { RNReactNativeFancyDownloader } = NativeModules;
//starting from here
import React from 'react';
import { View, Text, Modal } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
import * as Progress from 'react-native-progress';
import Styles from './src/style';
export default class Downloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dlProgress: 0, modalVisible: true, error: '' }
        this.downloadFile = this.downloadFile.bind(this);
    }
    downloadFile(filePath) {
        let self = this;
        let downloadTask = null;
        file_name = RNFetchBlob.fs.dirs.CacheDir + '/com.example.app.apk';
        RNFetchBlob.fs.exists(file_name)
            .then((exist) => {
                if (exist) {
                    this.setState({ modalVisible: false })
                    RNFancyDownloader.installApp(file_name);
                }
                else {
                    downloadTask = RNFetchBlob.config({
                        path: file_name + '.tmp',
                    })
                        .fetch('GET', filePath, {});
                    downloadTask.progress({ interval: 2000 }, (received, total) => {
                        this.setState({ dlProgress: parseFloat(received) / parseFloat(total) });
                    })
                        .then((resp) => {
                            RNFetchBlob.fs.mv(resp.path(), file_name)
                                .then(() => {
                                    self.setState({ modalVisible: false })
                                    RNFancyDownloader.installApp(file_name);
                                })
                                .catch((err) => {
                                    this.setState({ error: err });
                                });
                        })
                        .catch((err) => {
                            this.setState({ error: err });
                        });
                }
            })
            .catch((err) => {
                this.setState({ error: err });
            });
    }

    render() {
        if (this.props.hasOwnProperty('path') && this.props.hasOwnProperty('downloadApp')) {
            if (this.state.modalVisible) {
                return (
                    <View style={Styles.container}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onShow={() => this.downloadFile(this.props.path)}
                            onRequestClose={() => {
                                console.log('Modal has been closed.');
                            }}
                        >
                            <View style={Styles.overlay}></View>

                        </Modal>
                        <Text style={Styles.titleStyle}>{this.props.text}</Text>
                        <Progress.Bar
                            borderRadius={20}
                            width={200}
                            height={13}
                            showText={true}
                            indeterminate={false}
                            progress={this.state.dlProgress} />
                    </View>

                );
            } else {
                return (<View></View>)
            }
        } else {
            return <View></View>
        }
    }
}




