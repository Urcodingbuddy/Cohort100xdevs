import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Posts } from './pages/Posts'
import { Post } from './pages/Post'
import { RecoilRoot } from 'recoil';
import { Publish } from './pages/Publish'
// import { Appbar } from './components/Appbar'


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Posts />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}
export default App
