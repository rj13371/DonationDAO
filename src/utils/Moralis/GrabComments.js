import Moralis from 'moralis';

const GrabCOmments = async (receiver) => {
  console.log(receiver);

  const Comment = Moralis.Object.extend('Comment');
  const query = new Moralis.Query(Comment);

  query.descending('createdAt');

  query.startsWith('receiver', receiver);

  query.limit(10);

  const comments = await query.find();

  console.log(comments);

  return comments;
};

export default GrabCOmments;
