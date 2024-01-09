import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Machine Learning Projects"
        description="Dive into the dynamic realm of machine learning through a curated collection of diverse projects.
        This exploration spans various algorithms, including Linear Regression, Naive Bayes, Support Vector Machines,
        Decision Trees, Random Forest, K-Means Clustering, Time Series Analysis, and more."
        link="https://github.com/rupeshbug?tab=repositories"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Data Science </Tags>
            <Tags color={ColorTags.LIME}>Machine Learning</Tags>
          </>
        }
      />
      <Project
        name="JavaFX Quiz App"
        description="Discover the JavaFX Quiz App, a dynamic application seamlessly blending education and entertainment. 
        Offering an engaging citizenship assessment test—MasathaiQuiz—it enables people fosters unity among individuals from Malaysia, Thailand, 
        and Singapore."
        link="https://github.com/rupeshbug/MasathaiQuiz"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Java</Tags>
            <Tags color={ColorTags.EMERALD}>JavaFX</Tags>
            <Tags color={ColorTags.YELLOW}>CSS</Tags>
          </>
        }
      />
      {/* <Project
        name="eVote"
        description="A secure online voting platform made using Next.js and Tailwind CSS for university assignment."
        link="https://github.com/rupeshbug/eVote"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>NextJS</Tags>
            <Tags color={ColorTags.INDIGO}>Tailwind CSS</Tags>
            <Tags color={ColorTags.ROSE}>Prisma</Tags>
          </>
        }
      /> */}
    </div>
  </Section>
);

export { ProjectList };
