import * as React from 'react';
import QuoteBoxView from './QuoteBoxView';

type QuoteBoxState = {
  content: string;
  author: string;
};

const QUOTE_API_URL: string = 'http://quotes.stormconsultancy.co.uk/random.json';

export default class QuoteBox extends React.Component<{}, QuoteBoxState> {
  state: QuoteBoxState = { content: '', author: '' };

  generateQuote = (): void => {
    fetch(QUOTE_API_URL)
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          content: data.quote,
          author: data.author,
        })
      );
  };

  render() {
    return <QuoteBoxView {...this.state} onButtonClick={this.generateQuote} />;
  }
}
