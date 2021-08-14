import { store } from './firebase'
import StringUtil from './StringUtil'
import firebase from './firebase'

export const getLatesNewsList = async () => {
  const newsList = []
  const snapShot = await getDatabase().orderBy('postDate', 'desc').limit(10).get()
  snapShot.forEach((doc) => {
    const data = doc.data()
    data.id = doc.id
    data.contents = StringUtil.decodeStringForFileStore(data.contents)
    data.postDate = data.postDate.toDate()
    data.postDateStr = StringUtil.formatDate(data.postDate)
    newsList.push(data)
  })
  console.log('newsss', newsList)
  return newsList
}

export const postNews = async (news) => {
  // replace new line for store filestore
  news.contents = StringUtil.encodeStringForFileStore(news.contents)
  news.postDate = firebase.firestore.Timestamp.fromDate(news.postDate)
  if (news.id && news.id !== '') {
    await getDatabase().doc(news.id).update({
      title: news.title,
      contents: news.contents,
      postDate: news.postDate,
    })
  } else {
    await getDatabase().add({
      title: news.title,
      contents: news.contents,
      postDate: news.postDate,
    })
  }
}

export const deleteNews = async (id) => {
  await getDatabase().doc(id).delete()
}

const getDatabase = () => {
  return store.collection('newsInfo')
}
