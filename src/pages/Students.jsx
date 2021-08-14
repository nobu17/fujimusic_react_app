import StudentCard from '../components/students/StudentCard'
import Box from '@material-ui/core/Box'

const infoList = [
  {
    title: '音羽歯科',
    contents:
      '清水教室の生徒の山田さんの経営する歯科医院です。フジミュージックで毎年開催するＢＢＱの写真も載っていますので見てみてください。',
    image: `${process.env.PUBLIC_URL}/images/otowa.png`,
    url: 'https://www.otowashika.com',
  },
  {
    title: 'Tommy',
    contents:
      'フジミュージックの卒業生で、現在は静岡を中心に音楽活動をしているTommyさんのサイトです。フジミュージックのイベントにも定期的に参加してくれています。',
    image: `${process.env.PUBLIC_URL}/images/tommy.jpg`,
    url: 'https://officeswitch.amebaownd.com',
  },
]

const getStudentPanel = ({ title, contents, image, url, index }) => {
  return (
    <Box m={2} key={index}>
      <StudentCard title={title} contents={contents} image={image} url={url}></StudentCard>
    </Box>
  )
}

export default function Students() {
  return (
    <>
      <h1>生徒紹介</h1>
      <p>フジミュージックの生徒(卒業生)の紹介です。</p>
      {infoList.map((item, index) => getStudentPanel({ ...item, index }))}
    </>
  )
}
