import { useState } from 'react';
import styles from '../../../styles/Common/Comment/AddComment.module.scss';

function AddComment({ parentCommentID, api }) {
  const [description, setDescription] = useState('');

  const onChange = (e) => {
    setDescription(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    api.postComment(description, parentCommentID);
    setDescription('');
  }

  return (
    <div className={styles.container}>
      <div>닉네임</div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="댓글을 남겨보세요" value={description} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default AddComment;
