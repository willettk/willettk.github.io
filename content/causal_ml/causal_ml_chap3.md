Title: Causal ML - Chapter 3
date: 2024-12-22
tags: causal, ml, work

## Chapter 3: Predictive Inference via Modern High-Dimensional Linear Regression

[PDF link to Chapter 3](https://causalml-book.org/assets/chapters/CausalML_chap_3.pdf)

**Core concept**: predictions in high-dimensional settings ($p\gg n$; $p$ is the number of regressors and $n$ number of samples) by leveraging penalties on the size of the model. My expectations are that this should be a deep explanation of why [lasso](https://en.wikipedia.org/wiki/Lasso_(statistics)) works.

### Notes

* two basic reasons why high-dimensional regressors require careful treatment: 1) many datasets have lots of potential features available and we should try to leverage them to improve predictive accuracy, and 2) transformation of raw regressors $W$ (aka "technical regressors" $T(W)$; polynomial, interaction, log/exp, etc) can also approximate better prediction rules.
* asserts that approximate sparsity of coefficients will go as $\beta_j \propto \frac{1}{j^2}$ in terms of explanatory power of coefficients. 

#### Miscellanea on Pelican and HTML stuff
