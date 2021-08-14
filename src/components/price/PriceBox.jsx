import * as React from 'react'
import { Card, CardContent, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '30px',
    textAlign: 'center',
    borderBottom: '3px solid #4169e1',
  },
  price: {
    fontSize: 28,
    lineHeight: 0.9,
    letterSpacing: 0.2,
    textAlign: 'right',
  },
  annotation: {
    fontSize: 18,
    lineHeight: 0.9,
    letterSpacing: 0.2,
    marginLeft: 20,
    textAlign: 'left',
  },
}))

export default function PriceBox({ title, prices, annotation }) {
  const classes = useStyles()
  return (
    <Box boxShadow={0}>
      <Card elevation={0} sx={{ maxWidth: 345 }}>
        <CardContent>
          <p className={classes.title}>{title}</p>
          {prices.map((price, index) => (
            <p key={index} className={classes.price}>
              {price}
            </p>
          ))}
          <p className={classes.annotation}>{annotation}</p>
        </CardContent>
      </Card>
    </Box>
  )
}
