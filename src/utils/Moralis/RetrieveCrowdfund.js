import Moralis from 'moralis';

const RetrieveCrowdfund = async (id) => {
  const Crowdfund = Moralis.Object.extend('Crowdfund');
  const query = new Moralis.Query(Crowdfund);
  const result = await query.get(id);
  return result;
};

export default RetrieveCrowdfund;
