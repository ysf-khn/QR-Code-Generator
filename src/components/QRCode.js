import classes from './QRCode.module.css';

const QRCode = (props) => {
  const defaultUrl =
    'https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=200x200';

  return (
    <>
      {props.isLoading ? (
        <h3 className={classes.loading}>Loading QR Code...</h3>
      ) : (
        <img src={props.url || defaultUrl} alt="" />
      )}
      <a href={props.url} target="_blank" rel="noopener noreferrer" download>
        <button className={classes.btn}>Download</button>
      </a>
    </>
  );
};

export default QRCode;
