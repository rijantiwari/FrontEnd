import React from 'react'
import ListComponent from './ListComponent';

const List = () => {
    const languages = ["Java", "C++ ", "Python"]
  return (
    <>
    <ul>
        {languages.map((language, i)=>
            // <li key={i}>{language}</li>
            <ListComponent list={language} />
        )}
    </ul>
    </>
  );
};

export default List