import { useEffect, useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import QRCode from './components/QRCode';

function App() {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchQR = async () => {
      const res = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?data=${
          text || 'Enter'
        }&size=200x200`
      );
      const data = await res;
      setUrl(data.url);
      setIsLoading(false);
    };
    fetchQR();
  }, [text]);

  return (
    <div className="App">
      <Header />
      <Input text={text} onEnterText={setText} />
      <QRCode isLoading={isLoading} url={url} />
    </div>
  );
}

export default App;
