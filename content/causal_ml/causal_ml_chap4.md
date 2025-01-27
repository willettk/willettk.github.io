Title: Causal ML - Chapter 4
date: 2025-01-26
tags: causal, ml, work

## Chapter 4: Statistical Inference on Predictive and Causal Effects in High-Dimensional Linear Regression Models

[PDF link to Chapter 4](https://causalml-book.org/assets/chapters/CausalML_chap_4.pdf)

**Core concept**: builds on Chapter 3 to create statistically robust confidence intervals for tools including lasso. In authors' viewpoint, this moves from *predictive* inference (i.e., what happens to the outcome) to *statistical* inference (i.e., is there a robust understanding of how the outcome depends on changes to input predictor).

### Notes

* Chapters 1 and 2 covered estimation of a predictive effect + confidence interval for regression; Chapters 3 and 4 extend the same respective concepts to high-dimensional models.
* This chapter starts with **double lasso**, which *is not the same* as **double/debiased ML**. Double lasso is fairly simple:
    1. Run two lasso regressions: $Y$ on $W$ and $D$ on $W$ and get residuals $\tilde{Y}$ and $\tilde{D}$. 
    1. Run least-squares regression of $\tilde{Y}$ on $\tilde{D}$ to get the estimator $\hat{\alpha}$. $\hat{\alpha}$ is the **partialled-out** effect of D on Y.
* There is a theoretical approach to calculating the standard error for $\hat{\alpha}$, which is mildly complex but depends only on estimates of the matrices for the target regressor, the noise, and the number of samples. 
* Again, authors argue that cross-validation using standard approaches is not suitable for a small sample due to overfitting. I appreciate the caution and the difference is clear in terms of the results in the notebook, but the examples do not show why the cross-validated result is wrong (other than an appeal to a priori values of the estimator). Relying on the outcome of the black-box package (`hdmpy`/[HDM in R](https://cran.r-project.org/web/packages/hdm/index.html)) doesn't really teach me anything or help me evaluate when to apply cross-validation vs theoretical penalties. I don't like this section as a technique; it has a valuable larger point, but the provided approach is insufficient.


### Miscellaneous learnings from going through this chapter

* Installing the required R packages for the notebook on country-level growth convergence took 5 minutes on Colab, as opposed to 23 seconds for Python. Not impressed with speed of R here.
* Datasets in R are apparently just available without explicit calling? Makes me uncomfortable that importing a library appears that it could just populate an arbitrarily large namespace without knowing where/what.
* R notebook also defaults to a ludicrous number of significant figures in standard data presentation.
* R can choose to explicitly drop columns from selection if given a negative ordinal number, which is useful.
* R distinguishes between `in`, which is used only in context of `for` loops (eg, for `(x in seq(10))`), and the infix operator `%in%`, which checks if the input is contained in the output. In Python, these two have the same syntax and are distinguished through use.
