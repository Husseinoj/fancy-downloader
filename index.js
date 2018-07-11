import React from 'react';
import RNFetchBlob from 'react-native-fetch-blob';
import Styles from './src/style';
export default class Downloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
        this.downloadFile = this.downloadFile.bind(this);
    }
    downloadFile(filePath) {
        let downloadTask = null;
        file_name = RNFetchBlob.fs.dirs.CacheDir + '/com.example.app.apk';
        RNFetchBlob.fs.exists(file_name)
            .then((exist) => {
                if (exist) {
                    RNFancyDownloader.installApp(file_name);
                }
                else {
                    downloadTask = RNFetchBlob.config({
                        path: file_name + '.tmp',
                    })
                        .fetch('GET', filePath, {});
                    downloadTask.progress({ interval: 2000 }, (received, total) => {
                        console.log(parseFloat(received) / parseFloat(total));
                    })
                        .then((resp) => {
                            RNFetchBlob.fs.mv(resp.path(), file_name)
                                .then(() => {
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
}