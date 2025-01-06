Title: Causal ML - Chapter 3
date: 2025-01-05
tags: causal, ml, work

## Chapter 3: Predictive Inference via Modern High-Dimensional Linear Regression

[PDF link to Chapter 3](https://causalml-book.org/assets/chapters/CausalML_chap_3.pdf)

**Core concept**: predictions in high-dimensional settings ($p\gg n$; $p$ is the number of regressors and $n$ number of samples) by leveraging penalties on the size of the model. My expectations are that this should be a deep explanation of why [lasso](https://en.wikipedia.org/wiki/Lasso_(statistics)) works.

*(note: the chapter does mostly dive into lasso, but also reviews other types of possible regularization methods including [ridge](https://en.wikipedia.org/wiki/Ridge_regression), [elastic net](https://en.wikipedia.org/wiki/Elastic_net_regularization), and [lava](https://arxiv.org/abs/1502.03155))*

### Notes

* two basic reasons why high-dimensional regressors require careful treatment: 1) many datasets have lots of potential features available and we should try to leverage them to improve predictive accuracy, and 2) transformation of raw regressors $W$ (aka "technical regressors" $T(W)$; polynomial, interaction, log/exp, etc) can also approximate better prediction rules.
* Lasso regression problem, mathematically: minimize the following expression with respect to coefficients $b \in \mathbb{R}^p$:

> $(\sum_i^n{(Y_i - b^\prime X_i)^2}) + (\lambda \cdot \sum^p_{j=1} |b_j| \hat{\psi_j})$

* The first component of Lasso (and all following regularization methods) is the in-sample mean squared error (times n) for the data; the second component is the lasso penalty, where loadings $\psi_j$ are usually set as the expectation value of the independent variables. 
    * *How is $b^\prime$ in the first term different (if it is) than $b_j$ in the penalty term?*
    * *Note 6, page 76: asserts that Lasso might select a variable where $\beta=0$ but that has a high marginal predictive benefit. Why would that be the case - shouldn't a coefficient of result in no marginal predictive benefit?*
* Important: overall magnitude of estimated coefficients when incorporating the penalty will be smaller than the unpenalized least squares solution, if $\lambda > 0$. This is the definition of **shrinkage/regularization bias**.
* Choice of penalization parameter $\lambda$ is a black box (several parts are explained, but it still seems like practitioners are just encouraged to leave this to be calculated under the hood). Looks like it can be automatically found in `LassoCV` (scikit-learn) through cross-validation; parameter in that implementation is named `alpha`.
* Options can be either 1) use coefficients estimated directly from Lasso, including the bias toward shrinkage for the non-zero coefficients; **or** 2) OLS Post-Lasso; eg, use Lasso only to select non-zero coefficients and then refit using ordinary least squares. In the example, this tends to have slightly better estimates of the largest coefficients, but still underpredicts values for $\sim \beta_2-\beta_5$.
* Lasso works best when assumed coefficients are sparse. Ridge works best in dense settings, and Lava for sparse+dense. 
    * *How to know a priori whether the intrinsic coefficients are sparse, dense, or a mixture of sparse+dense?*
        * In practice, one way is just to split the data into training and testing sets and just choose the method that performs best on test set. (shrug)
        * Another approach is to do the same but pick the model that has the highest scores after cross-validation.
    * *Why does Lasso get to set values to zero and Ridge doesn't? I'm not clear why absolute value vs squaring would do that; if $\beta_j$ is zero, it doesn't make a difference either way. Is it from the penalty loading factor?*
* Elastic Net is a linear combination of Lasso + Ridge, with two different penalty levels chosen separately by cross-validation. Since there is a Lasso component, Elastic Net still does variable selection. Elastic Net works well when the regression coefficients are **either** sparse or dense, but not sparse+dense.
* Lava is not directly included in scikit-learn, but it's straightforward to construct using base estimators from `Ridge` and `Lasso` and literally just adding them. See the [notebook](https://colab.research.google.com/github/CausalAIBook/MetricsMLNotebooks/blob/main/PM2/python_linear_penalized_regs.ipynb#scrollTo=boNconu7NXxs) for an example. The main difference between Elastic Net and Lava is that the former uses *all* coefficients for both penalization components, while Lava first separates components into dense and sparse parts and **then** determines the appropriate penalty levels and coefficients for each set. 

### Miscellaneous learnings from going through this chapter

#### Python
In Python, one can add a bare `*` when defining a function (seen in the [notebook](https://colab.research.google.com/github/CausalAIBook/MetricsMLNotebooks/blob/main/PM2/python_linear_penalized_regs.ipynb#scrollTo=sJ0IOVcLQuFO)). This doesn't change any of the inputs except that it forces all arguments **after** the `*` to be keyword only. 

```
def func(x, y, *, argname='foo'):
    print(x)
    print(y)
    print(argname)

# Only works for:

x=1
y=2
argval='bar'

func(x, y, argname=argval)

# but not for

func(x, y, argval)

# whereas if the bare `*` isn't included, both would work.

func(x, y, argname=argval)
func(x, y, argval)

```

So this seems useful for enforcing keyword over positional arguments.
