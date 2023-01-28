import './App.css';
import { ContactForm } from './ui-components';
import { API } from 'aws-amplify';
import { createContactForm } from '../src/graphql/mutations';

function App() {
  return (
    <ContactForm
  onSubmit={async(fields) => {
  await API.graphql({ query: createContactForm, variables: fields });
  }}
/>
);
}

export default App;
