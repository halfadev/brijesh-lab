type Video = { title: string; format: string; targetLength: string; teachingSequence?: string };

type LessonVideoProps =
  | { video: Video; placeholderTitle?: never; placeholderText?: never; youtubeId?: never; title?: never; className?: string }
  | { video?: never; placeholderTitle: string; placeholderText?: string; youtubeId?: never; title?: never; className?: string }
  | { video?: never; placeholderTitle?: never; placeholderText?: never; youtubeId: string; title: string; className?: string };

export function LessonVideo({ video, placeholderTitle, placeholderText, youtubeId, title, className }: LessonVideoProps) {
  if (youtubeId) {
    return (
      <section className={`lesson-video video-frame video-frame-embed ${className ?? ""}`.trim()} aria-label={title}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </section>
    );
  }

  if (!video) {
    return (
      <section className={`lesson-video video-frame ${className ?? ""}`.trim()} aria-label={placeholderTitle}>
        <div className="video-frame-copy">
          <p className="video-frame-title">{placeholderTitle}</p>
          {placeholderText ? <p>{placeholderText}</p> : null}
        </div>
      </section>
    );
  }

  return <section className={`lesson-video ${className ?? ""}`.trim()} aria-label="Video in development"><p className="eyebrow">Video placeholder</p><dl><div><dt>Working title</dt><dd>{video.title}</dd></div><div><dt>Format</dt><dd>{video.format}</dd></div><div><dt>Target length</dt><dd>{video.targetLength}</dd></div>{video.teachingSequence ? <div><dt>Teaching sequence</dt><dd>{video.teachingSequence}</dd></div> : null}<div><dt>YouTube embed</dt><dd>Pending</dd></div></dl></section>;
}
