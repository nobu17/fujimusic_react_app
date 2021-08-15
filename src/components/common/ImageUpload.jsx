import React from 'react'
import { TextField, Button, Card, CardMedia } from '@material-ui/core'

export default function ImageUpload({ url, disabled, onImageUpload = (f) => f }) {
  const handleFileChanged = (e) => {
    const file = e.target.files[0]
    if (!file) {
      return
    }
    onImageUpload(file)
  }
  const message = disabled ? 'アップロード中' : '画像アップロード'
  return (
    <>
      <Card sx={{ maxWidth: 245 }}>
        <CardMedia component="img" image={url} />
      </Card>
      <TextField disabled value={url} fullWidth></TextField>
      <Button variant="contained" component="label" color="primary" disabled={disabled}>
        {message}
        <input type="file" hidden accept="image/jpeg, image/jpg, image/png" onChange={handleFileChanged} />
      </Button>
    </>
  )
}
