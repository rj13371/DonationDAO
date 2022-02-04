import Moralis from 'moralis';

const RetrieveTopCrowdfunds = async () => {
  const Crowdfund = Moralis.Object.extend('Crowdfund');
  const query = new Moralis.Query(Crowdfund);

  query.descending('createdAt');

  query.limit(6);

  const crowdfunds = await query.find();

  console.log(crowdfunds);

  return crowdfunds;
};

export default RetrieveTopCrowdfunds;
