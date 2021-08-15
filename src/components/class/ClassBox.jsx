import React from 'react'
import LineBreakP from '../common/LineBreakP'
import { Card, CardContent, Box, ImageList, ImageListItem, Hidden, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
    borderBottom: '3px solid #4169e1',
  },
  contents: {
    textAlign: 'center',
    overflowWrap: 'break-word',
  },
}))

export default function ClassBox({ name, imageList, overview, lessonTime, place, placeUrl }) {
  const classes = useStyles()
  return (
    <Box mb={1} boxShadow={0}>
      <Card elevation={1} sx={{ maxWidth: 345 }}>
        <CardContent>
          <h2>{name}</h2>
          <Hidden smDown>
            <ImageList rowHeight={360} cols={imageList.length}>
              {imageList.map((item, index) => (
                <ImageListItem key={index} cols={1}>
                  <img src={item} />
                </ImageListItem>
              ))}
            </ImageList>
          </Hidden>
          <Hidden smUp>
            <ImageList rowHeight={240} cols={1}>
              {imageList.map((item, index) => (
                <ImageListItem key={index} cols={1}>
                  <img src={item} />
                </ImageListItem>
              ))}
            </ImageList>
          </Hidden>
          <p className={classes.title}>案内</p>
          <p className={classes.contents}>{overview}</p>
          <p className={classes.title}>レッスン時間</p>
          <LineBreakP className={classes.contents} strings={lessonTime}></LineBreakP>
          <p className={classes.title}>練習場所</p>
          <LineBreakP className={classes.contents} strings={place}></LineBreakP>
          <div className={'ggmap'} dangerouslySetInnerHTML={{ __html: placeUrl }} />
        </CardContent>
      </Card>
    </Box>
  )
}
