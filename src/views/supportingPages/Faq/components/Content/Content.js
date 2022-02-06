import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h5'}
          align={'left'}
        >
          {title}
        </Box>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            paddingY={1}
            elevation={0}
            sx={{
              '&:first-of-type': {
                borderTopLeftRadius: theme.spacing(1),
                borderTopRightRadius: theme.spacing(1),
              },
              '&:not(:first-of-type):before': {
                opacity: '1 !important',
                display: 'block !important',
              },
              '&.Mui-expanded': {
                margin: 0,
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
              padding={`${theme.spacing(0)} !important`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Questions about crowdfunding'}
          items={[
            {
              title: 'How does Donation DAO work?',
              subtitle:
                'You start by creating a story about the cause you are raising funds for. ',
            },
            {
              title: 'How much does it cost to start a Donation Page?',
              subtitle: 'It is currently free to setup a Donation page.',
            },
            {
              title: 'What can I raise money for?',
              subtitle:
                'You can choose to raise money for any cause you see fit. Whether that be for a friend, family member, yourself, a complete stranger or a charity organization. We do not moderate or restrict any of the crowdfunds that are posted on Donation DAO. We leave it up to the users to decide which Donation pages are popular and posted to the front of the leaderboards.',
            },
            {
              title: 'Do I need a cryptocurrency wallet to use Donation DAO?',
              subtitle:
                'Yes. You must have a cryptocurrency wallet setup to receive donations. We reccomend setting up a seperate wallet address to the one you regularly use in order to be as transparant as possible to your donors. ',
            },
            {
              title: 'How do I get Donations?',
              subtitle:
                'You can withdraw your crypto to your chosen offramp bank. At anytime you may withdraw your Donations from your wallet. This will be reflected on your public Donation page, as all transactions on the blockchain are public. ',
            },
            {
              title: 'What cryptocurrencies can I receive on my Donation page?',
              subtitle:
                'Any ERC20 token on the Polygon network or the Polygon native token is supported. ',
            },
            {
              title: 'Is my country eligable for Donation DAO?',
              subtitle: 'Yes. Cryptocurrency is beyond borders.',
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Questions about the web application'}
          items={[
            {
              title: 'How do you store our Data?',
              subtitle:
                'We store Data on a Web3 backend service called Moralis.',
            },
            {
              title: 'Are my donations SAFU on Donation DAO?',
              subtitle:
                'Yes, Donation DAO does not have access to any of your wallet private keys. We are only a frontend platform for crowdfunding causes.',
            },
            {
              title: 'Is my Data SAFU on Donation DAO?',
              subtitle:
                'We do not store potentially sensitive information like passwords or emails unlike our Web2 competititors. The only information we store on our Databases are the already public Donation pages which are not sensitive parts of Data.',
            },
            {
              title: 'Are you decentralized?',
              subtitle:
                'We are currently migrating to being fully hosted on IPFS, and are using a Web3 backend called Moralis. Decentralization is a spectrum and we are on the farthest reaches of decentralized apps.',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
