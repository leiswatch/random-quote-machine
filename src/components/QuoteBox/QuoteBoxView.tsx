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
    <p className='quote-box__content'>{content}</p>
    <p className='quote-box__author'>{author}</p>
    <button className='quote-box__button' onClick={onButtonClick}>
      Generate quote
    </button>
  </div>
);

export default QuoteBoxView;
