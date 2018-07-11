using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Fancy.Downloader.RNFancyDownloader
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNFancyDownloaderModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNFancyDownloaderModule"/>.
        /// </summary>
        internal RNFancyDownloaderModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNFancyDownloader";
            }
        }
    }
}
