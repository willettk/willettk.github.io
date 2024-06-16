Title: Causal ML - Chapter 2
date: 2024-06-04
tags: causal, ml, work

## Chapter 2: Causal Inference via Randomized Experiments

[PDF link to Chapter 2](https://causalml-book.org/assets/chapters/CausalML_chap_2.pdf)

### Notes

* Reminding myself about Chapter 1 as a start, since I've been a few days between these. Key points that I think this will build on were the theoretical derivation of the best linear predictor; statistical properties of least squares and how to attribute different parts of variance; adjusting for small $p/n$; and "partialling out" as a technique for explaining the effect of what happens when a single random variable changes while others are constant.
* Super short summary: if you randomize (plus other assumptions) and split into two samples, the difference in average outcomes between treated and untreated is the ATE. Using treatment covariates can improve the measurement, and causal diagrams are a method for interpreting the context of the effect.
* The necessity of defining "the underlying state of the world" as a mapping $\omega \mapsto V[\omega]$ falls somewhere between unnecessary and mathematically pretentious on first reading. 
* > "The inability to simultaneously observe a unit under both treatment and control is the fundamental problem of causal inference". - Holland (1986).
    * Seems fair.
* key assumptions, which I should know cold:
    * consistency ($Y \coloneqq Y[treatment]$; i.e., no hidden variation in treatment)
    * no interference; potential outcomes for any individual unit are not affected by treatment assignment to other units. 
        * this is one assumption probably is violated at least mildly in fee change analyses; raising fees on one segment could cause price and ad shifting, which changes economic competition and thus the possible response from other merchants.
    * consistency + no interference $\equiv$ **stable unit-treatment value assumption**, or **SUTVA**.
* drumming notation into my head. $D$ (and I think most capitalized variables) is a *random variable*, which here corresponds to treatment assignment. $d$ is the (potential) treatment state, which has actual assigned values 0,1 for binary treatment. 
* the *delta method* is introduced and insufficiently explained when trying to present the concept of relative effectiveness. I've heard this referenced in work-related projects before, so it seems fundamental enough that it's worth a deeper dive.
* The example in the [colab notebook on vaccine efficacy](https://colab.research.google.com/github/CausalAIBook/MetricsMLNotebooks/blob/main/CM1/python-rct-vaccines.ipynb#scrollTo=g-wCDeWCkYem) is useful in that it's an incredibly recent and relevant case study, which is excellent for motivating an accurate measurement. When calculating the CIs, though, the worked out examples aren't sufficent for me to feel confident repeating it. Authors assert "it's Bernoulli, so X then Y" - but they don't fill in the basics of why the former applies and then how that results in either of the applied variances. This is fairly basic stats and maybe this book should assume readers are beyond that point, but it stirs more mild frustration in me instead of comprehension. On the other hand, the handy breakdown of `sm.stats.Table2x2` is extremely useful (although it abstracts away all the assumptions that should go into its use). Useful but dangerous! 

*Part 2 - pre-treatment covariates and heterogeneity*

* A common mistake seems to center around conditioning on post-treatment covariates, rather than pre-treatment only. Pointed out that, for example, if units with missing covariates are dropped from the analysis (a natural urge), this is equivalent to conditioning on a post-treatment variable. This violates the random assigment assumption.
* Basics: average outcome in the untreated state is $\alpha$, and the average outcome in the treated state is $(\alpha + \beta_1)$. So the lift as I usually think of it in causal inference is $\alpha/\beta_1$, or the relative ATE. 
* The colab notebook asserts that there's an important difference between the ATE computed using non-robust standard errors and robust standard errors. I don't understand what they're referring to in the data, nor do I appreciate what they mean by an "efficient" estimator (vs an accurate or biased one, for example). *(later find that this means lower standard errors)* I'm generally finding that the explanation and quality of the coding notebooks is markedly worse than in the text. 
* possible useful functions in Python:
    * `from joblib import Parallel, delayed` - fairly basic way to use multiple processors for execution of functions ([see documentation example](https://joblib.readthedocs.io/en/latest/parallel.html))
    * `patsy` - package for describing statistical models in Python. Seems a more robust method of the formula-type language used in R. [Documentation](https://patsy.readthedocs.io/en/latest/overview.html)
    * `np.linalg.qr` - useful tip for using QR-decomposition of a matrix to remove multicollinear columns.
* the differences between the two causal diagrams (RCT vs "RCT Research Design") seem somewhere between trivial and important but unexplained. I think it's to emphasize that the impact is from 1) the outcome process + 2) treatment assignment.

#### Miscellanea on Pelican and HTML stuff

From the last post, I learned how to slightly modify `Makefile` to support end-to-end publishing to both master and content branches on Github, which is handy.

I also wish/wonder if the authors would accept git commits to the notebooks (mostly) and the text (occasionally). Mild typos and errata always bug me, and this is exactly the sort of text that could easily crowdsource that from interested readers.