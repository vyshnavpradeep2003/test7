import React from "react";
import './style.css';
function P1() {
    const [state, setState] = React.useState({
      wordCount: 0, 
    });
    
    const handleKeyPress = (e) => {
      const count = e.target.value;
      
      const countWords = (count) => {
        if (count.length === 0) {
          return 0;
        } else {
          count = count.replace(/(^\s*)|(\s*$)/gi,"");
          count = count.replace(/[ ]{2,}/gi," ");
          count = count.replace(/\n /,"\n");
          return count.split(' ').length; 
        }
      }
      
      setState({
        wordCount: countWords(count),
      });
    }
    
    return(
      <div id='container'>
        <textarea 
          id="p1"
          onChange={handleKeyPress}
        >    
        </textarea>
        <h4>Word Count: 
          <span className='num'> {state.wordCount}</span> 
        </h4>
      </div>
    );
  }

  export default P1;
  