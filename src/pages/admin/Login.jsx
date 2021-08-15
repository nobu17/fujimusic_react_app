import { Card, CardHeader, CardContent, CardActions, TextField, Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: '30px',
    textAlign: 'center',
    borderBottom: '3px solid #4169e1',
  },
  error: {
    color: 'red',
  },
}))

const loginForm = () => {
  const classes = useStyles()
  const history = useHistory()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)
    try {
      await login(email, password)
      history.push('/admin')
    } catch (err) {
      console.error(err)
      setMessage('ログインに失敗しました。')
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={submit}>
        <Card>
          <CardHeader title="ログイン" />
          <CardContent>
            <div>
              <p className={classes.error}>{message}</p>
              <TextField
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button type="submit" fullWidth variant="contained" size="large" color="secondary" disabled={loading}>
              ログインする
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  )
}

export default function Login() {
  return <>{loginForm()}</>
}
