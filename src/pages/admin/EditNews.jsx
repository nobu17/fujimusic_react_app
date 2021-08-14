import { useNews } from '../../hook/UseNews'
import { makeStyles } from '@material-ui/core'
import EditNewsList from '../../components/news/EditNewsList'
import AdminBackButton from '../../components/common/AdminBackButton'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Loading from '../../components/common/Loading'
import NewsEditDialog from '../../components/news/NewsEditDialog'

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

export default function EditNews() {
  const [open, setOpen] = useState(false)

  const classes = useStyles()
  const { newsList, error, loading, editNews, setEditNews, read, post, deleteById } = useNews()

  if (error) {
    console.error(error)
    return (
      <>
        <p className={classes.error}>データのロードに失敗しました。</p>
      </>
    )
  }

  if (loading) {
    return (
      <>
        <h2>お知らせ編集</h2>
        <Loading></Loading>
      </>
    )
  }

  const handleSelect = (index) => {
    setEditNews(newsList[index])
    setOpen(true)
  }

  const handleNewCreate = () => {
    const newItem = { id: '', title: '', contents: '', postDate: new Date() }
    setEditNews(newItem)
    setOpen(true)
  }

  const handleDelete = async (index) => {
    if (confirm('削除しますか？')) {
      await deleteById(newsList[index].id)
      await read()
    }
  }

  const handleChange = ({ name, value }) => {
    setEditNews((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDialogSubmit = async () => {
    await post()
    setOpen(false)
    await read()
  }

  const handleDialogCancel = () => {
    setEditNews()
    setOpen(false)
  }

  return (
    <>
      <AdminBackButton></AdminBackButton>
      <h2>お知らせ編集</h2>
      <p>※最新の10個のみ表示されます</p>
      <Button onClick={handleNewCreate} variant="contained" color="primary" fullWidth>
        新規作成
      </Button>
      <EditNewsList newsList={newsList} onSelectNews={handleSelect} onDelete={handleDelete}></EditNewsList>
      <NewsEditDialog
        open={open}
        item={editNews}
        onChange={handleChange}
        onCancel={handleDialogCancel}
        onSubmit={handleDialogSubmit}
      ></NewsEditDialog>
    </>
  )
}
