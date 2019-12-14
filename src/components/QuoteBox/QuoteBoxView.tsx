import * as React from 'react';

type QuoteBoxViewProps = {
  quote: string;
  onButtonClick: () => void;
};

const QuoteBoxView: React.FunctionComponent<QuoteBoxViewProps> = ({ quote, onButtonClick }) => (
  <div>
    <p>{quote}</p>
    <button onClick={onButtonClick}>Generate quote</button>
  </div>
);

export default QuoteBoxView;
