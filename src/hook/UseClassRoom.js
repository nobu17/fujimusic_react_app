import { useEffect, useState } from 'react'
import { getClassRoomList, postClassRoom } from '../lib/ClassRoomApi'
import { uploadImageWithCompress } from '../lib/StorageApi'
import { v4 as uuidv4 } from 'uuid'

export function useClassRooms(classIds) {
  const [classRooms, setClassRooms] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!classIds) return
    getClassRoomList(classIds)
      .then(setClassRooms)
      .then(() => setLoading(false))
      .catch(setError)
  }, [])

  return {
    classRooms,
    error,
    loading,
  }
}

export function useClassRoom(classId) {
  const storageUrl = 'images/'
  const [classRoom, setClassRoom] = useState({})
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (!classId) return
    getClassRoomList([classId])
      .then((d) => setClassRoom(d[0]))
      .then(() => setLoading(false))
      .catch(setError)
  }, [])

  const setNewValue = ({ name, value }) => {
    setClassRoom((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const changeImage = async (index, item) => {
    try {
      setUploading(true)
      const name = uuidv4() + '.jpg'
      const newUrl = await uploadImageWithCompress(storageUrl, name, item)
      let newItem = Object.assign([], classRoom.imageList)
      newItem[index] = newUrl
      setClassRoom((prev) => ({
        ...prev,
        imageList: newItem,
      }))
    } catch (err) {
      console.error('failed upload', err)
      throw err
    } finally {
      setUploading(false)
    }
  }

  const post = () => {
    setLoading(true)
    return postClassRoom(classRoom)
      .then(() => setLoading(false))
      .catch(setError)
  }

  return {
    classRoom,
    error,
    loading,
    uploading,
    setNewValue,
    changeImage,
    post,
  }
}
