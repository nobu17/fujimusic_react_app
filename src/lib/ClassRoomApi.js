import { store } from './firebase'
import StringUtil from './StringUtil'

export const getClassRoomList = async (classIds) => {
  const classInfoList = []
  try {
    for (const claId of classIds) {
      const info = await getClassRoom(claId)
      if (info) {
        classInfoList.push(info)
      } else {
        console.error('error there is no class:' + claId)
      }
    }
    return classInfoList
  } catch (err) {
    console.log('api error', err)
    throw err
  }
}

export const getClassRoom = async (classId) => {
  const ref = await getDatabase().doc(classId).get()
  if (ref.exists) {
    let temp = ref.data()
    temp.id = ref.id

    // replace new line for filestore
    temp.overview = StringUtil.decodeStringForFileStore(temp.description)
    temp.lessonTimes = StringUtil.decodeStringForFileStore(temp.lessonTimes)
    temp.place = StringUtil.decodeStringForFileStore(temp.lessonPlace)

    // imaage list is only 2 images
    if (temp.imageList.length > 2) {
      temp.imageList = temp.imageList.slice(0, 2)
    } else if (temp.imageList < 1 || !temp.imageList) {
      temp.imageList = ['', '']
    }
    return temp
  }
  return null
}

export const postClassRoom = async (roomInfo) => {
  console.log('start post', roomInfo)
  // replace new line for store filestore
  roomInfo.overview = StringUtil.encodeStringForFileStore(roomInfo.overview)
  roomInfo.lessonTimes = StringUtil.encodeStringForFileStore(roomInfo.lessonTimes)
  roomInfo.lessonPlace = StringUtil.encodeStringForFileStore(roomInfo.place)
  if (roomInfo.id && roomInfo.id !== '') {
    console.log('update post', roomInfo)
    await getDatabase().doc(roomInfo.id).update({
      name: roomInfo.name,
      overview: roomInfo.overview,
      lessonPlace: roomInfo.lessonPlace,
      placeUrl: roomInfo.placeUrl,
      imageList: roomInfo.imageList,
    })
    console.log('update post end', roomInfo)
  } else {
    await getDatabase().add({
      name: roomInfo.name,
      overview: roomInfo.overview,
      lessonPlace: roomInfo.lessonPlace,
      placeUrl: roomInfo.placeUrl,
      imageList: roomInfo.imageList,
    })
  }
}

const getDatabase = () => {
  return store.collection('classRoomInfo')
}
