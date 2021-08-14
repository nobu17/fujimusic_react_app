import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Price from './pages/Price'
import Students from './pages/Students'
import News from './pages/News'
import ClassRoom from './pages/ClassRoom'
import Login from './pages/admin/Login'
import AdminMenu from './pages/admin/AdminMenu'
import EditNews from './pages/admin/EditNews'
import EditClassRoom from './pages/admin/EditClassRoom'
import Header from './components/layouts/Header'
import { AuthProvider } from './contexts/AuthContext'
import AuthRoute from './components/common/AuthRoute'
import LoginRoute from './components/common/LoginRoute'
import { Container } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
  typography: {},
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <Container fixed>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/price" component={Price}></Route>
                <Route path="/students" component={Students}></Route>
                <Route path="/news" component={News}></Route>
                <Route path="/class" component={ClassRoom}></Route>
                <LoginRoute path="/admin/login" component={Login}></LoginRoute>
                <AuthRoute path="/admin" component={AdminMenu}></AuthRoute>
                <AuthRoute path="/admins/news" component={EditNews}></AuthRoute>
                <AuthRoute path="/admins/class/:id" component={EditClassRoom}></AuthRoute>
                <Redirect to="/"></Redirect>
              </Switch>
            </Container>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
