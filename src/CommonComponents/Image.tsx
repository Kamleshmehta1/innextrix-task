type imageProps = { width: number; height: number; url: string };

function Image(props: imageProps) {
  const { width, height, url } = props;
  return (
    <img
      loading="lazy"
      width={width}
      height={height}
      src={url}
      style={{
        objectFit: 'cover',
      }}
    />
  );
}

export default Image;
