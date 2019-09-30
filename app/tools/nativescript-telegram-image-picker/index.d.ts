
/**
 * Open the Image Picker Activity
 * @param {number} [photoLimit=1] - The max number of images that can be selected.
 */
export function openTelegramImagePicker(photoLimit?: number): Promise<TelegramPickerResponse>;


/**
 * The response from the Image Picker Activity result.
 * Will contain an array for photos and an array for videos selected.
 */
export interface TelegramPickerResponse {
    photos: Array<string>,
    videos: Array<string>
}