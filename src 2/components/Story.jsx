import React from "react";

const items = [
  {
    title: "Il nostro primo incontro",
    date: "15 Marzo 2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    img: "/images/story-a.jpg",
  },
  {
    title: "Il primo bacio",
    date: "25 Ottobre 2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    img: "/images/story-b.jpg",
  },
  {
    title: "Proposta di matrimonio",
    date: "15 Gennaio 2021",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    img: "/images/story-c.jpg",
  },
  {
    title: "Ci sposeremo",
    date: "31 Luglio 2026",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    img: "/images/story-d.jpg",
  },
];

function StoryText({ it, align = "left" }) {
  return (
    <div className={`storyCol storyTextCol ${align}`}>
      <div className="storyKicker">{it.title.toUpperCase()}</div>
      <div className="storyDate">{it.date}</div>
      <p className="storyText">{it.text}</p>
    </div>
  );
}

function StoryImage({ it, side = "right" }) {
  return (
    <div className={`storyCol storyImgCol ${side}`}>
      <div className="storyCircle">
        <img src={it.img} alt={it.title} />
        <div className="storyCircleDecor" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Story() {
  return (
    <section id="storia" className="section storyTheme27">
      <div className="container">
        <div className="storyHeader">
          <div className="storyButterfly" aria-hidden="true" />
          <h2 className="sectionTitle" style={{ marginBottom: 8 }}>
            LA NOSTRA STORIA
          </h2>
          <div className="storyHeaderLine" aria-hidden="true" />
        </div>

        <div className="storyTimeline">
          <div className="storyLine" aria-hidden="true" />

          {items.map((it, i) => {
            const right = i % 2 === 1;

            return (
              <div key={it.title} className="storyRow">
                {/* Alternanza DOM: pari = testo a sx, foto a dx. Dispari = foto a sx, testo a dx */}
                {!right ? (
                  <>
                    <StoryText it={it} align="alignRight" />
                    <div className="storyMid" aria-hidden="true">
                      <div className="storyDot" />
                    </div>
                    <StoryImage it={it} side="toRight" />
                  </>
                ) : (
                  <>
                    <StoryImage it={it} side="toLeft" />
                    <div className="storyMid" aria-hidden="true">
                      <div className="storyDot" />
                    </div>
                    <StoryText it={it} align="alignLeft" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
