import * as React from 'react';
import QuoteBoxView from './QuoteBoxView';

type QuoteBoxState = {
  quote: string;
  author: string;
};

export default class QuoteBox extends React.Component<{}, QuoteBoxState> {
  state: QuoteBoxState = { quote: '', author: '' };

  generateQuote = (): void => {
    console.log('Quote!');
  };

  render() {
    return <QuoteBoxView {...this.state} onButtonClick={this.generateQuote} />;
  }
}
