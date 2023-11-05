import React, {useState, useEffect} from "react";
import Button from "components/Button/Button";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import Searchbar from "components/Searchbar/Searchbar";
import fetchImages from "components/FetchImages/fetchImages";
import Notiflix from 'notiflix';
import { AppStyled } from 'components/App.styled';


const App = () => {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalData, setModalData] = useState(null)

  
  const openModal = (modData) => {
      setIsOpenModal(true);
      setModalData(modData);
  };

  const closeModal = () => {
      setIsOpenModal(false);
      setModalData(null);
  };
  
  const handleImageClick = (post) => {
      setIsOpenModal(true);
      setModalData(post);
  };


  useEffect(() => {
    if (page !== 1 || query !== '') {
      (async () => {
      try {
        setIsLoading(true);

        const data = await fetchImages(query, page);

        if (data.hits.length === 0) {
          Notiflix.Notify.info('Sorry, there are no images matching your search query', { position: 'center-center', width: '460px', fontSize: '16px' });
        };

        setPosts((prevPosts) => (page === 1 ? data.hits : [...prevPosts, ...data.hits]));
      } catch (error) {
        Notiflix.Notify.failure('Oops, something went wrong', { position: 'center-center', fontSize: '16px' });
      } finally {
        setIsLoading(false);
      }
    })();
  }
  }, [page, query]);
  

  const handleSubmit = (query) => {
      setQuery(query);
      setPage(1);
    };
  

  const handleClick = () => {
    setPage(page + 1);
  };


    return (
      <AppStyled>
       <Searchbar onSubmit={handleSubmit} posts={posts}/>
       {isLoading && <Loader />}
       <ImageGallery posts={posts} onImageClick={handleImageClick}/>
       {isOpenModal &&  <Modal openModal={openModal} closeModal={closeModal} modalData={modalData} />}
       {posts.length >= 12 && <Button onClick={handleClick} />}
    </AppStyled>
  )};

export default App;