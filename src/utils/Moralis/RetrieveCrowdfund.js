import Moralis from 'moralis';

const RetrieveCrowdfund = async (id) => {
  const Crowdfund = Moralis.Object.extend('Crowdfund');
  const query = new Moralis.Query(Crowdfund);
  const result = await query.get(id);

  //   const findCrowdfund = new Crowdfund();
  //   findCrowdfund.id = id;

  //   console.log(findCrowdfund);
  //   const query = new Moralis.Query(Crowdfund);
  //   query.equalTo('crowdfund', findCrowdfund);
  //   const crowdfund = await query.find();

  //   console.log(crowdfund);

  return result;
};

export default RetrieveCrowdfund;
