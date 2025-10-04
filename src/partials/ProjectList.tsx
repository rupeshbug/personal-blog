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
        name="AI Research Assistant"
        description="AI Research Agent: Query academic papers via OpenAlex, rank them based on criteria like recency, relevancy, or citation count, and use LangChain to summarize insights and analyze research gaps."
        link="https://research-copilot-five.vercel.app/"
        img={{
          src: '/assets/images/project-fire.png',
          alt: 'AI Research Assistant',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Next.js</Tags>
            <Tags color={ColorTags.INDIGO}>LangChain</Tags>
            <Tags color={ColorTags.PURPLE}>OpenAlex API</Tags>
            <Tags color={ColorTags.SKY}>AI</Tags>
          </>
        }
      />
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
    </div>
  </Section>
);

export { ProjectList };
