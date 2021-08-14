import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, CardHeader, CardContent, CardActions, TextField, Button, Box, makeStyles } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useClassRoom } from '../../hook/UseClassRoom'
import AdminBackButton from '../../components/common/AdminBackButton'
import ImageUpload from '../../components/common/ImageUpload'
import Loading from '../../components/common/Loading'

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

export default function EditClassRoom() {
  const classes = useStyles()
  const history = useHistory()
  const { id } = useParams()
  const { classRoom, error, loading, uploading, post, changeImage, setNewValue } = useClassRoom(id)
  const [message, setMessage] = useState('')

  if (error) {
    return displayError(error, 'データの読み込みに失敗しました。')
  }

  if (loading) {
    return <Loading></Loading>
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      await post()
      history.push('/admin')
    } catch (err) {
      console.error(err)
      alert('failed')
    }
  }

  const handleImageUpload = async (index, file) => {
    try {
      await changeImage(index, file)
    } catch (err) {
      alert('アップロードに失敗しました。')
    }
  }

  return (
    <>
      <AdminBackButton></AdminBackButton>
      <form noValidate autoComplete="off" onSubmit={submit}>
        <Card>
          <CardHeader title={classRoom.name} />
          <CardContent>
            <div>
              <p className={classes.error}>{message}</p>
              <TextField
                fullWidth
                margin="dense"
                id="overview"
                label="概要"
                value={classRoom.overview}
                multiline
                rows={5}
                variant="outlined"
                required
                name="overview"
                onChange={(e) => setNewValue(e.target)}
                disabled={loading}
              />
              <TextField
                fullWidth
                margin="dense"
                name="lessonTimes"
                id="lessonTimes"
                label="レッスン時間"
                value={classRoom.lessonTimes}
                multiline
                rows={13}
                required
                variant="outlined"
                onChange={(e) => setNewValue(e.target)}
                disabled={loading}
              />
              <TextField
                fullWidth
                margin="dense"
                name="place"
                id="place"
                label="レッスン場所"
                value={classRoom.place}
                multiline
                rows={5}
                variant="outlined"
                required
                onChange={(e) => setNewValue(e.target)}
                disabled={loading}
              />
              <TextField
                fullWidth
                margin="dense"
                name="placeUrl"
                id="placeUrl"
                label="GoogleMapUrl"
                value={classRoom.placeUrl}
                variant="outlined"
                required
                onChange={(e) => setNewValue(e.target)}
                disabled={loading}
              />
              <p>教室画像</p>
              {classRoom.imageList.map((image, index) => (
                <Box m={2} key={index}>
                  <ImageUpload
                    url={image}
                    disabled={uploading}
                    onImageUpload={(f) => handleImageUpload(index, f)}
                  ></ImageUpload>
                </Box>
              ))}
            </div>
          </CardContent>
          <CardActions>
            <Button type="submit" fullWidth variant="contained" size="large" color="secondary" disabled={loading}>
              確定
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  )
}
