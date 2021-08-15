import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import PriceBox from '../components/price/PriceBox'

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: '30px',
    textAlign: 'center',
    borderBottom: '3px solid #4169e1',
  },
}))

const overview = () => {
  const classes = useStyles()
  return (
    <>
      <p className={classes.title}>入会案内</p>
      <p>
        まずは体験レッスンで教室の様子をお確かめ下さい。 ギターをお持ちでない方は練習用ギターを お貸しいたしますので
        お気軽にお申し付けください。
      </p>
      <p>メール： fujimusic2011@gmail.com</p>
      <p>電話： 090-8471-5227 丸山幸男</p>
      <p>※メールでお申し込みの方は下記をご記入ください</p>
      <ul>
        <li>お名前、年齢、性別</li>
        <li>教室名（三島、清水）</li>
        <li>コース（アコースティックギターかエレキギター）</li>
        <li>電話番号またはメールアドレス</li>
      </ul>
    </>
  )
}

const price = () => {
  const prices = [
    {
      title: '入会金',
      prices: ['￥5,000'],
      annotation: '',
    },
    {
      title: '月会費',
      prices: ['一般 ￥5,200', '高校生 ￥4,200', '中学生以下 ￥3,200'],
      annotation: '※１ヵ月に３回のレッスンになります。1回のレッスンは1時間です',
    },
    {
      title: '個人レッスン',
      prices: ['￥3,000'],
      annotation: '※1回毎の料金です。予約制です。',
    },
  ]
  return (
    <>
      <Grid container spacing={2}>
        {prices.map((item, index) => (
          <Grid item key={index} md={4} xs={12}>
            <PriceBox title={item.title} prices={item.prices} annotation={item.annotation}></PriceBox>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default function Price() {
  return (
    <>
      {overview()}
      {price()}
    </>
  )
}
