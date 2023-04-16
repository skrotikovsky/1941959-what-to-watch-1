type VideoProps = {
  src: string;
  posterIMG: string;
  isMuted: boolean;
}
export function Video({src, posterIMG, isMuted}: VideoProps): JSX.Element {
  return (
    <video src={src} muted={isMuted} poster={posterIMG} width={'280'} height={'175'} autoPlay/>
  );
}
