import Moralis from 'moralis';

const GrabComments = async (receiver) => {
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

export default GrabComments;
