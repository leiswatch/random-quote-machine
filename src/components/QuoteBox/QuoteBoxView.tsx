import * as React from 'react';

type QuoteBoxViewProps = {
  content: string;
  author: string;
  onButtonClick: () => void;
  isLoading: boolean;
};

const QuoteBoxView: React.FunctionComponent<QuoteBoxViewProps> = ({
  content,
  author,
  onButtonClick,
  isLoading,
}) => (
  <div className='quote-box'>
    <div className='quote-box__quote'>
      {isLoading ? (
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <p className='quote-box__content'>{content}</p>
          <p className='quote-box__author'>{author}</p>
        </>
      )}
    </div>

    <button className='quote-box__button' onClick={onButtonClick}>
      <i className='fas fa-redo'></i>
    </button>
  </div>
);

export default QuoteBoxView;
