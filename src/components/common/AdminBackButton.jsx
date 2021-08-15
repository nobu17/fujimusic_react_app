import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function AdminBackButton() {
  return (
    <Button component={Link} to="/admin" variant="contained" color="secondary" fullWidth>
      管理メニューに戻る
    </Button>
  )
}
