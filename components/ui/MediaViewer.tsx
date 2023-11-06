/* eslint-disable @next/next/no-img-element */

interface Props {
  url: string;
  isVideo: boolean;
  token: any;
}

export const MediaViewer = ({ url, isVideo = false, token }: Props) => {
  if (isVideo) {
    let videoUrl = url;
    const ipfs = url.includes("ipfs");
    if (ipfs) {
      videoUrl = url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }

    return (
      <video className="aspect-square rounded-xl object-cover" muted autoPlay={true} loop={true}>
        <source src={videoUrl} type="video/mp4" />
      </video>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 text-black">
      <img
        className="aspect-[16/9] rounded-xl object-cover"
        src={url}
        alt="token image"
        width={1080}
        height={900}
      />
      <div className="text-sm font-semibold">{token.title}</div>
      <div className="w-[95%] text-xs">{token.description}</div>
    </div>
  );
};
