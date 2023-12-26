import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Rupesh</GradientText> 👋
        </>
      }
      description={
        <>
          <p>
            I stay curious & learn new things related to data science and
            machine learning. The transformative process of turning data into
            stories and unraveling the hidden patterns and insights that lies
            within it captivates me towards the infinite possibilies that data
            holds. Join me in this journey, and together, we'll unravel the
            tales hidden within the vast landscapes of data.
          </p>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/rupeshbug?tab=repositories">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/rupesh-chaulagain-42b91a249/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
