import logo from './logo.svg';
import './App.css';
import { posts } from './posts';
import { useState } from 'react';
import PostItem from './components/PostItem';
import Button from './components/Button';

const total = 100;
const perPage = 10;

function App() {
  const [post, setPost] = useState(posts.slice(0, perPage));
  const [numberPage, setNumberPage] = useState(1);

  const getPrevPage = () => {
    if (numberPage > 1) {
      setPost(posts.slice(((numberPage - 2) * perPage), (perPage * (numberPage - 1))));

      setNumberPage((prevState) => { return prevState - 1 });

    }
  }

  const getNextPage = () => {
    if (numberPage < (total / perPage)) {
      setNumberPage(numberPage + 1);
      setPost(posts.slice(((perPage * numberPage)), ((numberPage + 1) * perPage)));
    }
  }


  return (
    <div className="App">
      {
        post.map((item) => {
          return <PostItem key={item.id} id={item.id} title={item.title} body={item.body} />
        })
      }
      <Button title={'prev'} onClickFunc={getPrevPage} />
      <p>{numberPage}</p>
      <Button title={'next'} onClickFunc={getNextPage} />
    </div>
  );
}

export default App;
