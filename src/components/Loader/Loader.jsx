import { ColorRing } from 'react-loader-spinner';

const customWrapperStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const Loader = () => {
  return (
    <div style={customWrapperStyle}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
