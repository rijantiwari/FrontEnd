import React from 'react'
import ListComponent from './ListComponent';

const List = () => {
    const languages = ["Java", "C++ ", "Python"]   
    let authorizedUser = true;
  
  return (
    <>
    {/* {authorizedUser ? (<ul>
        {languages.map((language, i)=>
            // <li key={i}>{language}</li>
            <ListComponent data={language} value={language} key={i} />
        )}
    </ul>):(<> Not Authorized</>)} */}
    
    </>
  );
  
};

export default List