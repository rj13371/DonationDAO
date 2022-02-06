import React, { createContext, useState } from 'react';

export const CreateCrowdfundContext = createContext();

export function CreateCrowdfundProvider(props) {
  const [crowdfundForm, setCrowdfundForm] = useState({
    type: 'individual',
    name: '',
    city: '',
    country: '',
    address: '',
    title: '',
    goal: '',
    description: '',
    image: '',
    youtube: '',
    date: new Date(),
  });

  console.log(crowdfundForm);

  const updateForm = (val) => {
    const form = val;
    setCrowdfundForm((prev) => {
      return { ...prev, ...form };
    });
  };

  return (
    <CreateCrowdfundContext.Provider value={{ crowdfundForm, updateForm }}>
      {props.children}
    </CreateCrowdfundContext.Provider>
  );
}
