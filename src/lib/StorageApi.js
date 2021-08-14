import { storage } from './firebase'
import ImageUtil from './ImageUtil'

export const uploadFile = async (dir, name, file) => {
  try {
    const storageRef = storage.ref(dir)
    const snapshot = await storageRef.child(name).put(file)
    return snapshot.ref.getDownloadURL()
  } catch (err) {
    console.error('upload is fail', err)
    throw err
  }
}

export const uploadImageWithCompress = async (dir, name, file) => {
  await ImageUtil.getCompressImageFileAsync(file)
  return await uploadFile(dir, name, file)
}
