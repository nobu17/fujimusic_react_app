import { Card, CardMedia, Box, Grid, Hidden, makeStyles } from '@material-ui/core'
import AppealBox from '../components/home/ApprealBox'

const useStyles = makeStyles(() => ({
  topimage: {
    marginLeft: -10,
    marginRight: -10,
  },
  header: {
    marginTop: 60,
    marginBottom: 30,
  },
}))

const topImage = () => {
  const classes = useStyles()
  return (
    <>
      <Card elevation={0} className={classes.topimage} sx={{ maxWidth: 545 }}>
        <Hidden smDown>
          <CardMedia component="img" image={`${process.env.PUBLIC_URL}/images/top.png`} />
        </Hidden>
        <Hidden smUp>
          <CardMedia component="img" image={`${process.env.PUBLIC_URL}/images/top_mini.png`} />
          <CardMedia component="img" image={`${process.env.PUBLIC_URL}/images/top_mini2.png`} />
        </Hidden>
      </Card>
    </>
  )
}

const greeting = () => {
  const classes = useStyles()
  return (
    <>
      <h2 className={classes.header}>ご挨拶</h2>
      <Grid container>
        <Grid item md={7} xs={12}>
          <Box m={2}>
            <p>
              fujimusic(フジミュージック）ギター教室には、小学生から60代、70代の幅広い年代の生徒がいます。
              <br />
              アットホームで気軽に楽しめ、そして、音楽好きな仲間を見つけることができる、そんな教室を目指しています。
              <br />
              やってみたいけど、踏み出せない、そんなひとはいませんか？ぜひ一緒に音楽を楽しみましょう！
            </p>
            <p>
              静岡県東部(沼津市,三島市,長泉町,清水町,裾野市)と、静岡県中部(静岡市清水区,葵区,駿河区)で活動をしています。
            </p>
          </Box>
        </Grid>
        <Grid item md={5} xs={12}>
          <Card sx={{ maxWidth: 545 }}>
            <CardMedia component="img" image={`${process.env.PUBLIC_URL}/images/top2.jpg`} />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

const appeal = () => {
  const classes = useStyles()
  const appealPoints = [
    {
      title: '低価格',
      contents: 'どなたでも気軽に参加できるように、一般的なギター教室と比較して安価な価格で受講できます。',
    },
    {
      title: '幅広い年齢層',
      contents: '小学生から７０代まで、男女問わず様々な生徒がレッスンに参加しています。',
    },
    {
      title: '２つの教室',
      contents: '静岡県東部(沼津市,三島市,長泉町,清水町,裾野市)と、中部(静岡市清水区,葵区,駿河区)で活動をしています。',
    },
    {
      title: '発表会',
      contents:
        '年に2回の発表会で日頃の成果を披露できます。また、他の生徒と交流が楽します。BBQ等のイベントも行います。',
    },
  ]
  return (
    <>
      <h2 className={classes.header}>当教室の特徴</h2>
      <Grid container spacing={2}>
        {appealPoints.map((item, index) => (
          <Grid item key={index} md={3} xs={12}>
            <AppealBox title={item.title} contents={item.contents}></AppealBox>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

const teacher = () => {
  const classes = useStyles()
  return (
    <>
      <h2 className={classes.header}>講師紹介</h2>
      <Grid container>
        <Grid item md={7} xs={12}>
          <Box m={2}>
            <p>丸山 幸男(まるやま ゆきお)</p>
            <p>
              フジミュージック代表の丸山です。三島、清水教室のどちらの生徒も楽しみながらレッスンをしています。定期的な発表の場もあるので、飽きずにレッスンを続けることができます。フジミュージックに参加して一緒に楽しみましょう。
            </p>
          </Box>
        </Grid>
        <Grid item md={5} xs={12}>
          <Card sx={{ maxWidth: 545 }}>
            <CardMedia component="img" image={`${process.env.PUBLIC_URL}/images/teacher.jpg`} />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

const bottomLink = () => {
  return (
    <Box m={2}>
      <a href="http://www.guitar-kyoushitsu.com/">ギター教室ナビ</a>
    </Box>
  )
}

export default function Home() {
  const classes = useStyles()
  return (
    <>
      {topImage()}
      {greeting()}
      {appeal()}
      {teacher()}
      {bottomLink()}
    </>
  )
}
