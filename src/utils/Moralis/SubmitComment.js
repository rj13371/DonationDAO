import Moralis from 'moralis';

const SubmitComment = async (commentForm) => {
  const Comment = Moralis.Object.extend('Comment');
  const comment = new Comment();

  const options = { chain: 'rinkeby', addresses: commentForm.contractAddress };
  const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata(options);

  console.log(tokenMetadata);

  (async () => {
    comment.set({
      ...commentForm,
      tokenName: tokenMetadata[0].name,
      owner: Moralis.User.current().id,
    });
  })();

  comment.save().then(
    (comment) => {
      // Execute any logic that should take place after the object is saved.
      alert('New object created with objectId: ' + comment.id);
    },
    (error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Moralis.Error with an error code and message.
      alert('Failed to create new object, with error code: ' + error.message);
    },
  );
};

export default SubmitComment;
