import { Section } from './components/Section';
import Data from './data/info.json';

export const App = () => {
  return (
    <>
      <div className='background'></div>
      <aside class='container-indicator'>
        <article class='follower'></article>
        <div class='circle'></div>
        <div class='circle'></div>
        <div class='circle'></div>
        <div class='circle'></div>
        <div class='circle'></div>
      </aside>
      {Data.map(({ title, paragraphs, srcImage }, ind) => {
        return (
          <Section key={ind}>
            <div class='content'>
              <h2
                className='title content'
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <aside
                className='container-paraghaps content'
                style={{ '--bg-flower': `url(${srcImage})` }}
              >
                <img src={srcImage} alt={title} className='image' />
                {paragraphs.map((text, ind) => (
                  <p key={ind} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </aside>
            </div>
          </Section>
        );
      })}
    </>
  );
};
