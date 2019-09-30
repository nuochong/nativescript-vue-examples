[![npm](https://img.shields.io/npm/v/nativescript-telegram-image-picker.svg)](https://www.npmjs.com/package/nativescript-telegram-image-picker)
[![npm](https://img.shields.io/npm/dt/nativescript-telegram-image-picker.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-telegram-image-picker)

# NativeScript-Telegram-Image-Picker
NativeScript plugin using the [TelegramGallery Image Picker library](https://github.com/TangXiaoLv/TelegramGallery) for a customized image picker for Android.

** ANDROID ONLY ** - this plugin uses a native Android library so there is no direct equivalent for iOS.

### 
![library Sample](https://github.com/TangXiaoLv/TelegramGallery/raw/master/png/1.gif)

## License
This plugin is licensed under the MITlicense by Brad Martin

## Installation

```
tns plugin add nativescript-telegram-image-picker
```

#### TypeScript

```typescript
import { openTelegramImagePicker, TelegramPickerResponse } from 'nativescript-telegram-image-picker';

public whateverYouLike() {
    
    // Open the Telegram Gallery Image Picker Activity      
    openTelegramImagePicker(5).then((resp: TelegramPickerResponse) => {
       // looping over the selected pictures in the response        
       for (var i = 0; i < resp.photos.length; i++) {
         console.log(resp.photos[i]);
       }
    })
      
}

```

### API

- openTelegramImagePicker(photoLimit?: number): Promise *TelegramPickerResponse*;

**TelegramPickerResponse** -
{
    photos: Array<string>,
    videos: Array<string>
}
