import { makeStyles } from '@material-ui/core'
import NewsBox from '../components/news/NewsBox'
import { useNews } from '../hook/UseNews'
import Loading from '../components/common/Loading'

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: '30px',
    textAlign: 'center',
    borderBottom: '3px solid #4169e1',
  },
  error: {
    color: 'red',
  },
}))

const displayError = (err, message) => {
  const classes = useStyles()
  console.error(err)
  return (
    <>
      <p className={classes.error}>{message}</p>
    </>
  )
}

const newsList = () => {
  const newsList = [
    { title: 'タイトル1', postDate: '2021-02-02', contents: 'hogeeeee' },
    { title: 'タイトル2', postDate: '2021-02-04', contents: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
  ]
  return (
    <>
      <h2>お知らせ</h2>
      {newsList.map((item, index) => (
        <NewsBox key={index} title={item.title} postDate={item.postDateStr} contents={item.contents}></NewsBox>
      ))}
    </>
  )
}

export default function News() {
  const classes = useStyles()
  const { newsList, error, loading } = useNews()

  if (error) {
    return (
      <>
        <p className={classes.error}>データのロードに失敗しました。</p>
      </>
    )
  }

  if (loading) {
    return (
      <>
        <h2>お知らせ</h2>
        <Loading></Loading>
      </>
    )
  }

  return (
    <>
      <h2>お知らせ</h2>
      {newsList.map((item, index) => (
        <NewsBox key={index} title={item.title} postDate={item.postDateStr} contents={item.contents}></NewsBox>
      ))}
    </>
  )
}
