import React from 'react';
import LeadCaptureForm from './components/LeadCaptureForm';

interface AppProps {
  fields: any[];
}

const App: React.FC<AppProps> = ({ fields }) => {
  return (
    <div className="App">
      <LeadCaptureForm fields={fields} />
    </div>
  );
};

export default App;