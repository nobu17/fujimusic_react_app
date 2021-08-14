import * as React from 'react'
import Card from '@material-ui/core/Card'
import { CardActionArea } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

export default function StudentCard({ title, contents, image, url }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={url}>
        <CardMedia component="img" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1">{contents}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
