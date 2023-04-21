type VideoProps = {
  src: string;
  isMuted: boolean;
}
export function Video({src, isMuted}: VideoProps): JSX.Element {
  return (
    <video src={src} muted={isMuted} width={'280'} height={'175'} autoPlay loop/>
  );
}
