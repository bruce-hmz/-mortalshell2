"use client";

import { useState } from "react";

type VideoFacadeProps = {
  youtubeId: string;
  title: string;
  poster: string;
  caption: string;
};

export function VideoFacade({
  youtubeId,
  title,
  poster,
  caption,
}: VideoFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="video-frame">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        ) : (
          <button
            type="button"
            className="video-consent"
            onClick={() => setLoaded(true)}
            style={{ backgroundImage: `url(${poster})` }}
          >
            <span className="video-consent__veil" aria-hidden="true" />
            <span className="video-consent__play" aria-hidden="true">
              ▶
            </span>
            <span className="video-consent__label">
              Hosted on YouTube — press play to load it. Loading sends your
              request to YouTube.
            </span>
          </button>
        )}
      </div>
      <p className="media-caption">
        {caption} ·{" "}
        <a
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube ↗
        </a>
      </p>
    </div>
  );
}
