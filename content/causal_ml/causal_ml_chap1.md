Title: Causal ML - Intro and Chapter 1
date: 2024-06-02
tags: causal, ml, work

I've been slowly reading the online book [CausalML](https://causalml-book.org/), whose authors include some of my distant colleagues at Amazon. My goals are to:

1. Read the whole book; to try and maintain momentum, I'm shooting for 1 month timeframe. Basically a chapter every other day.
2. Run through the associated notebooks in Python to work with actual data and implementation.
3. Run through at least one code examples in R (rather than my staple of Python), to try to improve my ability to work in another language. 
4. Take notes on the core concepts, and include areas where I think this could be applied to current and future work.

## Chapter 1: Predictive Inference with Linear Regression in Moderately High Dimensions

[PDF link to Chapter 1](https://causalml-book.org/assets/chapters/CausalML_chap_1.pdf)

### Notes

* It's interesting to think about the implication that the best linear predictor is not found from setting $E[(Y - \beta^\prime X)] = 0$, but rather $E[(Y - \beta^\prime X)X] = 0$. This comes from the fact that this minimizes the **mean squared error** and not the mean absolute error; not sure if the solution for MAE could be defined since it's non-differentiable.
    * Simple decomposition of the solution: $Y = \beta^\prime X + \varepsilon$, where the residual $\varepsilon$ is orthogonal to the covariate vector $X$.
* Authors refer to the "law of iterated expectations", which is an alternative name for the "[law of total expectation](https://en.wikipedia.org/wiki/Law_of_total_expectation)". The special case of samples is clearer to me for a practical purpose, similar to how one works out total probabilities for a simple Bayesian approach: $E[X] = \sum_i E[X|A_i]P[A_i]$. Conditional expectation is important since one can use a **linear combination of non-linear transforms** to solve the best prediction problem.
* Moving to finite samples &mdash; i.e., the real world &mdash; just replaces the theoretical expectation values with empircal averages over the existing sample. Going from $\beta$ to $\hat{\beta}$.
* The decomposition is a clean way to think about how the variance is explained. For $E[Y^2] = E[(\beta^\prime X)^2] + E[\varepsilon^2]$, the latter term is the population mean squared error. So $R^2$ (either for the population or the sample) is literally the ratio of explained variation by the best linear predictor to the total variation, and is bounded between 0 and 1. This is a good approximation for $(\textrm{number of }\beta) << (\textrm{number of samples})$, or $p/n$ being small. This can be formally adjusted in a regression, and is automatically provided as a fit parameter if using standard packages like `statsmodels`.
* I understand the math of partialling out, but link to the earlier material needs a reread. Redo the [wage-gap notebook](https://colab.research.google.com/github/CausalAIBook/MetricsMLNotebooks/blob/main/PM1/python-ols-and-lasso-for-wage-gap-inference.ipynb) for a practical example.
* Also, why is $\beta_1$ not primed but $\beta_2^\prime$ is?
* Despite having been introduced to them about a dozen times, lasso (and ridge) aren't intuitive concepts to me. Maybe this time through I'll find a better way to make them stick (other than the handwaving statement of "it penalizes certain bits of your regression/helps with overfitting"), which is nowhere near an actual understanding.


#### Miscellanea on Pelican and HTML stuff

As an aside, starting to write these posts resulted in realizing that Markdown as rendered in the browser doesn't natively support mathmode/LaTeX in the same way that Jupyter or IDE Markdown renderers do. the plugin [render-math](https://github.com/pelican-plugins/render-math) worked well for Pelican right out of the box (although the package has \<30 stars on Github as of Jun 2024, so I'm a bit worried about long-term support/interest). Just `pip install pelican-render-math` and add the plugin to `pelicanconf.py`. It does take the extra second or so for MathJax to render tech, but I'm grateful that this worked quite easily so far.

I also was reminded that Pelican automatically names the output HTML files according to the title in the metadata; the actual filename is ignored. This slightly annoys me in that it won't be clear on how content maps to output, if I'm trying to compare? Eg, I can have a content file named `content/foobar.md`. If that file has the following content:

```
Title: apples to apples

Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
```

This article will be rendered as `output/apples_to_apples.html`, and would change depending on whatever the title is. It seems confusing in that I don't know what to name my article files now for best practice. 
