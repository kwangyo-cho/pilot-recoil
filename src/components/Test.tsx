import React from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useRecoilStateLoadable
} from 'recoil';

import axios from 'axios';

const _getSampleTrigger = atom({
  key: '_getSampleTrigger',
  default: {},
});

const getSampleData = selector({
  key: 'id',
  get: async ({ get }) => {
    console.log("adasds");
    get(_getSampleTrigger);
    // const response = await axios.get('http://api.devcapsule.me//project/display/597ae9de-1f48-453c-baaf-25c51b89d47c');
    const response = await axios.get('http://office.adcapsule.kr/mock/test.json');
    return response.data;
  },
  set: ({ set }) => {
    set(_getSampleTrigger, o => o); 
  }
});

const Test = () => {
  const [sample, refetchSample] = useRecoilStateLoadable(getSampleData);
  switch (sample.state) {
    case 'hasValue':
      return (
        <>
          <button onClick={refetchSample}>리로드</button>
          <div>{sample.contents.subject}</div>
        </>
      );
    case 'loading':
      return (
          <div>loading...</div>
        );
    case 'hasError':
      return (
        <div>{sample.contents}</div>
      );
      //throw sample.contents;
  }
}


export default Test;
