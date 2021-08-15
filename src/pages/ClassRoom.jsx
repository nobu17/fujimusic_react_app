import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useClassRooms } from '../hook/UseClassRoom'
import ClassBox from '../components/class/ClassBox'
import Loading from '../components/common/Loading'

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 10,
    marginBottom: 10,
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

export default function ClassRoom() {
  const classIds = ['mishima', 'shimizu']
  const { classRooms, error, loading } = useClassRooms(classIds)

  if (error) {
    return displayError(error, 'データのロードに失敗しました。')
  }

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <>
      {classRooms.map((item, index) => (
        <ClassBox
          key={index}
          name={item.name}
          imageList={item.imageList}
          overview={item.overview}
          lessonTime={item.lessonTimes}
          place={item.place}
          placeUrl={item.placeUrl}
        ></ClassBox>
      ))}
    </>
  )
}
