import React, { useContext } from 'react';
import { CreateCrowdfundContext } from 'context/CreateCrowdfundContext';
import Moralis from 'moralis';
import { Button } from '@mui/material';

export default function CreateCrowdfund() {
  const { crowdfundForm } = useContext(CreateCrowdfundContext);
  const Crowdfund = Moralis.Object.extend('Crowdfund');

  const handleSubmit = async () => {
    const crowdfund = new Crowdfund();
    const file = new Moralis.File(
      crowdfundForm.image.name,
      crowdfundForm.image,
    );

    await file.saveIPFS();
    console.log(file.ipfs(), file.hash());

    crowdfund.set({
      ...crowdfundForm,
      owner: Moralis.User.current().id,
    });

    crowdfund.set('image', file);

    crowdfund.save().then(
      (crowdfund) => {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + crowdfund.id);
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      },
    );
  };

  const getFile = () => {
    const query = new Moralis.Query(Crowdfund);
    query.equalTo('owner', Moralis.User.current().id);
    query.find().then(function (crowdfund) {
      const ipfs = crowdfund[2].get('image').ipfs();
      const hash = crowdfund[2].get('image').hash();
      console.log('IPFS url', ipfs);
      console.log('IPFS hash', hash);
      console.log(crowdfund);
    });
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleSubmit}
        size={'large'}
        variant={'contained'}
        type="button"
      >
        Submit
      </Button>

      <Button
        onClick={getFile}
        size={'large'}
        variant={'contained'}
        type="button"
      >
        get fiel
      </Button>
    </React.Fragment>
  );
}
