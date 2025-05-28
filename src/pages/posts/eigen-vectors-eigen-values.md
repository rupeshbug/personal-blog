---
layout: '@/templates/BasePost.astro'
title: ' Unveiling Stock Market Patterns with Eigenvectors and Covariance Analysis'
description: 'Discover how linear algebra concepts like eigenvectors, eigenvalues, and covariance matrices reveal hidden patterns in stock returns. Learn with Python code how to extract dominant trends from multiple stocks using real mathematical tools.'
pubDate: 2025-05-28T00:00:00Z
imgSrc: '/assets/images/stock.png'
imgAlt: 'Image post'
---

# Unveiling Stock Market Patterns with Eigenvectors and Covariance Analysis


# Introduction: The Power of Math in Finance

Ever wondered how concepts from high school math class—like matrices, vectors, and eigenvalues—can actually be used to understand the real world? More specifically, how these tools can reveal hidden patterns in something as chaotic as the stock market? In this blog, we’ll explore how linear algebra powers the analysis of stock return relationships using eigen decomposition of the covariance matrix, helping us discover underlying patterns in how stocks move together.

# A Quick Primer: What Are Eigenvectors, Eigenvalues, and the Covariance Matrix?

Suppose we have a matrix A that represents a transformation (like our covariance matrix). If we apply it to a vector x, we usually get a new vector pointing in a different direction. However, there are special vectors—called eigenvectors—that don’t change direction when transformed by A. They only get stretched or compressed. Formally:

$$
A * x = \lambda x
$$

Here:

- **x** is the eigenvector
- **λ** (lambda) is the eigenvalue
- **A** is our matrix (in this case, the covariance matrix)

This means: vector x comes out scaled by λ, but pointing in the same direction. These special vectors (eigenvectors) and scalars (eigenvalues) reveal intrinsic structure in data transformations.

Now, what is a **covariance matrix**?

- Covariance measures how two variables move together—whether their values tend to rise and fall in sync, or inversely.
- The covariance matrix is a square matrix that contains pairwise covariances between all combinations of variables (in our case, stock returns).

By performing eigen decomposition on this matrix, we can uncover the main directions in which the data varies—i.e., the dominant patterns of co-movement in our stock returns.

## The Problem: Too Many Stocks, Too Much Noise

Suppose you're analyzing the daily returns of 5 different stocks: Stock_A to Stock_E. Each of these stocks moves up and down based on a variety of factors—company news, economic indicators, global events, etc. The challenge is: can we uncover any underlying structure in these movements?

### Step 1: Create and Prepare the Dataset

We first generate a synthetic dataset representing daily closing prices of five stocks. Then, we compute their daily log returns:

``` python 
import numpy as np
import pandas as pd

# Simulated stock prices
np.random.seed(42)
days = 100
prices = np.cumprod(1 + 0.01 * np.random.randn(days, 5), axis=0)
df_prices = pd.DataFrame(prices, columns=["Stock_A", "Stock_B", "Stock_C", "Stock_D", "Stock_E"])

# Compute daily log returns
df_returns = np.log(df_prices / df_prices.shift(1)).dropna()
```

A daily return measures the percentage change in a stock’s price from one day to the next, but instead of simple returns, we often use log returns—calculated as the natural logarithm of the ratio between consecutive prices. Log returns are preferred in quantitative finance because they are time-additive (meaning you can sum them over multiple periods to get total returns), tend to be more normally distributed, and help stabilize variance, all of which make them more suitable for statistical modeling and analysis.

### Step 2: Compute the Covariance Matrix

The covariance matrix tells us how each stock's returns move in relation to others.

``` python
cov_matrix = np.cov(df_returns.T)
```
- Diagonal elements = variance of each stock
- Off-diagonal elements = covariance between different stocks

### Step 3: Perform Eigen Decomposition

Eigen decomposition helps us find the principal directions in which variance occurs:

``` python
eigenvalues, eigenvectors = np.linalg.eig(cov_matrix)
```

- **Eigenvectors** represent directions (or portfolios) in which the data varies
- **Eigenvalues** tell us how much variance is captured by each direction

Example Output:

``` python
print("Eigenvalues:", eigenvalues)
print("Eigenvectors (each column is a principal direction):")
print(pd.DataFrame(eigenvectors, columns=["PC1", "PC2", "PC3", "PC4", "PC5"], index=df_returns.columns))
```

### How Much Does Each Direction Explain?

Now let’s see how much of the total variance is explained by each eigenvector:

``` python
total_variance = sum(eigenvalues)
explained_variance_ratio = eigenvalues / total_variance
print(explained_variance_ratio)
```

You might get something like:

``` python
[0.8302, 0.0501, 0.0447, 0.0358, 0.0391]
```

## Conclusion

PC1 captures the vast majority (83%) of the structure in your stock returns. This strongly suggests a single dominant pattern—likely a market-wide movement where all stocks rise or fall together.

PC2 through PC5 capture smaller, residual movement patterns—likely due to:

- Sector-specific behavior,
- Stock-specific idiosyncrasies,
- Random noise.

So instead of analyzing 5-dimensional stock behavior, you can explain about 83% of the movement using just 1 component (PC1).

**Bonus Insight:** The eigenvectors of the covariance matrix are the principal components used in Principal Component Analysis (PCA). Each principal component is a linear combination of the original stocks, weighted by the eigenvector coefficients. These components define new axes that capture the maximum variance in the data, helping to reveal the most important patterns.

We can use this decomposition to reduce dimensionality and simplify analysis. For example:

- **Visualization**: Plot returns in PC1-PC2 space to identify patterns and clusters.
- **Clustering**: Group stocks based on similarity in principal component space.
- **Feature Engineering**: Use these principal components as inputs for machine learning models to improve predictions and insights.
