"use client";

import { useEffect, useRef, useState } from "react";

// Phones (and small tablets held upright) get the 9:16 cut; everything else gets 16:9.
const VERTICAL_QUERY = "(max-width: 767px), (orientation: portrait) and (max-width: 1024px)";

const CUTS = {
  vertical: { src: "/videos/settlix-ad-whatsapp-status.mp4", poster: "/videos/settlix-ad-poster-vertical.jpg" },
  wide: { src: "/videos/settlix-ad.mp4", poster: "/videos/settlix-ad-poster.jpg" },
};

// Click-to-play brand film. Only the poster loads until the visitor presses play.
// The cut follows the screen live (rotate the phone, resize the window) and the frame
// always matches the cut, so the video is never cropped.
export default function AdVideo() {
  const [vertical, setVertical] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia(VERTICAL_QUERY);
    const sync = () => setVertical(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Start playback once the <video> for the chosen cut is mounted (also after a cut switch mid-play)
  useEffect(() => {
    if (playing) videoRef.current?.play().catch(() => {});
  }, [playing, vertical]);

  const cut = vertical ? CUTS.vertical : CUTS.wide;

  return (
    <div className={`ad-video ${vertical ? "is-vertical" : "is-wide"}`}>
      {playing ? (
        <video
          key={cut.src}
          ref={videoRef}
          src={cut.src}
          poster={cut.poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          aria-label="Settlix: recovery calls have rules. You don't have to face them alone."
        />
      ) : (
        <button type="button" className="ad-video-poster" onClick={() => setPlaying(true)} aria-label="Play the 30-second Settlix video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={cut.poster} src={cut.poster} alt="" loading="lazy" decoding="async" />
          <span className="ad-video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
          </span>
          <span className="ad-video-len" aria-hidden="true">0:29</span>
        </button>
      )}
    </div>
  );
}
