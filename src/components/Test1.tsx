import React from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';


const textState = atom({
    key: 'text1State', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

const charCountState = selector({
    key: 'charCount1State', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });

function Test1() {
  return (

    <div>
        <TextInput />
        <CharacterCount />
    </div>

  );
}

function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }

  function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }

export default Test1;
