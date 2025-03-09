Title: Causal ML - Chapter 5
date: 2025-03-08
tags: causal, ml, work

## Chapter 5: Causal Inference via Conditional Ignorability

[PDF link to Chapter 5](https://causalml-book.org/assets/chapters/CausalML_chap_5.pdf)

**Core concept**: there is a way to identify causal effects even when treatment is not randomly assigned and instead depends on observed covariates. However, if the treatment assigment is independent conditional on some other covariates, than the overall causal effect of the treatment can be measured by adjusting for the covariates. This is "conditional ignorability", aka "unconfoundedness".

### Notes
* In one line, conditional independence for random variables  conditional on covariates can be written as:

    $D ⫫ Y[d] | X$

    * $D$ is the treatment status
    * $Y[d]$ is the outcome variable conditional on some value $d$ of the treatment
    * $X$ is a set of covariates
* This assumption is untestable.
* Figure 5.4 is really hard to parse; I see the distributions being restored, but nothing in it mathematically convinces me.
* very basic concept: if considering the chocolate-Nobel Prize correlation (which is wrong also, Switzerland doesn't have the most Nobel Prizes per capita), only compare results conditional on countries above a certain GDP, for example. Within that group, can look for relative differences in chocolate consumption as a function of the output (Nobels awarded).
* I don't know what "support" means in the context of 5.2, and it's not explained. Frustrating again.
* As an alternative to directly conditioning on covariates $X$, it is equivalent to remove the bias by conditioning on the propensity score $p[X] = P(D=1|X)$. This is potentially simpler since $X$ can be high-dimensional, but $p$ is a single vector and can work with linear regression.
* Need a good example for difference between ATE and ATT.




### Miscellaneous learnings from going through this chapter

* this version of the chapter has errors in references that weren't rendered in the LaTeX version. There is a GitHub repo (https://github.com/CausalAIBook)
* oddly, there is no basic LaTeX symbol for conditional independence. Need to copy in the Unicode directly and hope that XeTeX or something similar will render it. $⫫$
* no notebooks or code provided for this section