import React from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  loading: {
    marginTop: 60,
  },
  loadingTitle: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: '30px',
    textAlign: 'center',
  },
}))
export default function Loading({ message = 'Loading...', size = 90 }) {
  const classes = useStyles()
  return (
    <>
      <p className={classes.loadingTitle}>{message}</p>
      <CircularProgress className={classes.loading} size={size}></CircularProgress>
    </>
  )
}
