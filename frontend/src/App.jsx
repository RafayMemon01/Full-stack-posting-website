import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import FeedPage from "./pages/feedPage/FeedPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PageLayout from "./Layouts/PageLayout/PageLayout";
import { Box, Image } from '@chakra-ui/react';

function App() {
  const isAuthentic = useSelector((state) => state.user.isAuthenticate);

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feeds" element={isAuthentic ? <FeedPage /> : <AuthPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/user/:userId" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

const PageNotFound = () => {
  return (
    <Box fontWeight={'bold'} fontSize={'18px'} flexDir={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Image alt='error gif' src='https://i.giphy.com/8L0Pky6C83SzkzU55a.webp' />
      Looks like you are lost!
    </Box>
  );
}

export default App;
