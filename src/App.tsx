import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Post, createPost } from './actions';
import { StoreState } from './reducers';

import './App.css';

interface AppProps {
  post: Post[];
  createPost(post: Post): void;
}

const App = (props: AppProps) => {
  const [post, setPost] = useState({
    author: '',
    body: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.target;
    setPost({
      ...post,
      [target.name]: target.value,
    });
  };

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setPost({
      ...post,
      body: event.target.value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (post.body === '' || post.author === '') {
      return null;
    }
    props.createPost(post);
    setPost({
      ...post,
      body: '',
    });
  };

  const renderList = (): JSX.Element[] => {
    return props.post.map((value, index) => {
      return (
        <div key={index} className="card">
          <div className="card__header">
            <div className="card__header--avatar">{value.author[0]}</div>
            <div className="card__header--author">{value.author}</div>
          </div>
          <div className="card__body">{value.body}</div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="welcome">Welcome to ChatBot</div>
        {renderList()}
      </div>
      <div className="form">
        <form onSubmit={(event) => onSubmit(event)}>
          <input
            type="text"
            name="author"
            value={post.author}
            placeholder="User Name:"
            onChange={(event) => handleChange(event)}
            className="form__author"
          />
          <div className="form__send-box">
            <textarea
              name="body"
              value={post.body}
              placeholder="Type Something..."
              onChange={(event) => handleChangeTextArea(event)}
              className="form__input"
            />
            <input type="submit" value="Send" className="form__send" />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ post }: StoreState): { post: Post[] } => {
  return { post };
};

export default connect(mapStateToProps, { createPost })(App);
