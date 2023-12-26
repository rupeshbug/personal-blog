---
layout: '@/templates/BasePost.astro'
title: 'Understanding Hypothesis Testing and its Applications in Data Science'
description: Discover the intricacies of hypothesis testing — a cornerstone in statistical analysis. Uncover its principles, applications, and essential concepts in a concise journey that demystifies the world of statistical inference.
pubDate: 2020-02-06T00:00:00Z
imgSrc: '/assets/images/two-tailed-test.png'
imgAlt: 'Image post'
---

# Understanding Hypothesis Testing and its Applications in Data Science

Before delving into the intricacies of hypothesis testing and its applications in data science, it is crucial to understand the fundamental concept of a hypothesis. In simple terms, a hypothesis is a claim that requires verification. It represents an idea that can be tested through observation or experimentation. Also, it is essential to note that a hypothesis cannot be proved; it can either be accepted or rejected.

In statistical analysis, one tests an assumption about a population parameter through two mutually exclusive statements: the null hypothesis and the alternative hypothesis. These statements are evaluated, and a decision will be made regarding the one that is best supported by the data. Now, let’s familiarize ourselves with the concepts of null and alternate hypotheses.

**Null Hypothesis:** Null hypothesis means a default claim which assumes no difference. It is denoted by $H_0$.

**Alternate Hypothesis**: Alternate hypothesis is the claim we want to prove which contradicts the null hypothesis. It is denoted by $H_a$ or $H_1$.

It’s easier to wrap your head around using an example.

Statement: Doctors make $100,000 annually.

$H_0: \mu_0 = 100,000$

$H_1: \mu_0 \neq 100,000$

Note that $\mu_0$ denotes the population mean and x̄ denotes the sample mean.

To illustrate hypothesis testing, a statement is considered "Doctors make $100,000 annually", with a null hypothesis of the population mean being $100,000, and an alternate hypothesis of the population mean not being equal to $100,000. The null hypothesis assumes no difference and is what we test against. If the sample mean is not significantly different from the null hypothesis and close to the true population mean, we accept the null hypothesis; otherwise, we reject it. This process helps us make statistical inferences and draw conclusions about the population based on sample data.

## Type 1 and Type 2 errors

Statistical tests are often conducted on sample data. Well, the main essence of inferential statistics is to relate or generalize data features to the entire population. Randomly selected data samples cannot account for 100% accuracy on the whole population. Consequently, errors, classified as type I and type II errors, are present in the inferential statistical process.

**Type I error:** Reject a true null hypothesis due to the lack of evidence.

T**ype II error:** Accept a false null hypothesis

## Test Statistic

A test statistic is used in a hypothesis test to decide whether to accept or reject the null hypothesis. The test statistic involves a specific formula that calculates a single number indicating the degree of consistency between the null hypothesis and the sample data. As the null hypothesis assumes no difference, a small number is expected. If the test statistic value is close to zero, it indicates a high degree of compatibility between the sample data and the null hypothesis, thereby allowing for the acceptance of the null hypothesis. Conversely, a larger value suggests a low degree of compatibility between the sample data and the null hypothesis, implying the presence of an effect in the population, and leading to its rejection.

There are various statistical tests used in hypothesis testing, and they differ based on the type of data and the assumptions made about the population. The z-test is used for large sample sizes when the population standard deviation is known, and it uses the z-score. The t-test is used for small sample sizes when the population standard deviation is unknown, and it uses the t-score. Other statistical tests include the chi-square test, ANOVA, and regression analysis. The choice of statistical test depends on the research question, type of data, and population assumptions.

**Note:-** If the sample mean (x̄) is close to the hypothesized mean (µ) then, the z-score value is close to zero. This shows the consistency of our data with the null hypothesis leading to the acceptance of the null hypothesis.

Now is the time to learn the terminology associated with hypothesis testing, such as significance level, p-value, and critical value. They are discussed below:

## **Significance level(α)**

The significance level, denoted by alpha (α), is the probability of rejecting a null hypothesis when it is actually true. Rejecting a true null hypothesis is known as a type 1 error. Significance levels of 0.1 (10%), 0.05 (5%), and 0.01 (1%) are commonly used. As the significance level becomes lower, stronger evidence is required to reject the null hypothesis. If the test statistic falls within the significance region, we reject the null hypothesis.

## Critical Value

A critical value separates the acceptance and rejection regions in a hypothesis test. If the value we get from the test statistic exceeds the critical value, we reject the null hypothesis.

## P-value

The p-value is the probability of observing a result as extreme or more extreme than the one obtained in our data (outcome of the statistical test), assuming the null hypothesis is true. It represents the smallest level of significance at which we can still reject the null hypothesis. The p-value indicates how likely it is that our data could have occurred under the null hypothesis, with a low likelihood indicating that the null hypothesis might not be acceptable. Its value ranges from 0 to 1, and a smaller value indicates a greater likelihood of rejecting the null hypothesis.

### Decision rule:-

Reject the null hypothesis if,

p-value < α

Accept the null hypothesis if,

p-value > α

We have discussed significance levels, critical values, and p-values. These terminologies can be better understood by the figure given below.

![hypothesis_testing.png](/assets/images/two-tailed-test.png)

Fig: Illustration of significance level, critical value, and p-value in a two-tailed hypothesis test (Image By Author)

Hypothesis testing is a crucial component of data science, providing a rigorous framework for making decisions and drawing conclusions from data. In practice, hypothesis testing is used in a wide variety of applications, from clinical trials and medical research to A/B testing in marketing and product development. It enables data scientists to assess the significance of their findings and make data-driven decisions that can have real-world impacts. Understanding the principles and techniques of hypothesis testing allows data scientists to ensure that their analyses are accurate and reliable, assisting in the advancement and innovation of a wide range of fields.

## References and Recommendations

- [https://statisticsbyjim.com/hypothesis-testing/statistical-hypothesis-testing-overview/](https://statisticsbyjim.com/hypothesis-testing/statistical-hypothesis-testing-overview/)
- [https://www.investopedia.com/terms/h/hypothesistesting.asp#:~:text=Key Takeaways-,Hypothesis testing is used to assess the plausibility of a,of the population being analyzed](https://www.investopedia.com/terms/h/hypothesistesting.asp#:~:text=Key%20Takeaways-,Hypothesis%20testing%20is%20used%20to%20assess%20the%20plausibility%20of%20a,of%20the%20population%20being%20analyzed)