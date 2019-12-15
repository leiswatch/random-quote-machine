import * as React from 'react';

type QuoteBoxViewProps = {
  content: string;
  author: string;
  onButtonClick: () => void;
};

const QuoteBoxView: React.FunctionComponent<QuoteBoxViewProps> = ({
  content,
  author,
  onButtonClick,
}) => (
  <div className='quote-box'>
    <div className='quote-box__quote'>
      <p className='quote-box__content'>{content}</p>
      <p className='quote-box__author'>{author}</p>
    </div>
    <button className='quote-box__button' onClick={onButtonClick}>
      <i className='fas fa-redo'></i>
    </button>
  </div>
);

export default QuoteBoxView;
