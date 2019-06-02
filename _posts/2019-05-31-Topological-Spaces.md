---
layout: post
title: '위상적 공간'
author: LK
date: 2019-05-31 12:00
tags: [topology,mathematics]
mathjax: false
image: /files/covers/post/mathematics.jpg
---

위상수학의 첫 번째 정리
#### Topological Space

<br>

**위상수학**이라는 수학에서 **위상**은 다음과 같이 정의한다.

##### Definition. 위상, 위상공간
>집합 $X$에 대해 $X$의 부분집합의 모임 $\mathcal{T}$이 다음 성질을 맍고할 때 $\mathcal{T}$를 $X$의 위상이라고 한다.
>> i. $\varnothing,X\in\mathcal{T}$  
>> ii. $\{O_i\mid i\in I \}\subseteq \mathcal{T}$ 에 대하여 $\bigcup \limits_{i\in I} O_{i} \in \mathcal{T}$  
>> iii. $O_1, O_2, ..., O_k \in \mathcal{T}$ 에 대하여 $O_1 \cap O_2 \cap ... \cap O_k \in \mathcal{T}$
>
> 이때, 위상 $\mathcal{T}$ 가 주어진 집합 $X$를 $(X, \mathcal{T})$로 표기하고 위상공간이라 한다.

<br>

정의한 위상에 대해서 **열린집합**을 추가적으로 정의한다.


##### Definition. 열린집합(Open set)
> 위상 $\mathcal{T}$가 주어진 위상공간 $X$에 대하여 $U \subseteq X, U \in \mathcal{T}$ 이면 $U$를 열린집합이라 한다.[^openset]

[^openset]: 여기서의 열린집합의 정의는 위상이 주어졌을 때임을 주의해야한다.


<br>

열린 집합의 성질은 다음과 같다

##### Note. 열린집합의 성질
> * $\varnothing, X$ : 열린집합
> * 열린집합의 임의의 합집합은 열린집합
> * 열린집합의 임의의 교집합은 열린집합

<br>

열린집합을 정의했으므로 위상공간을 다음과 같이 말할 수 있다.

##### Remark
>위상공간이란, 열린집합이라고 불리는 부분집합의 모임이 주어진 집합

<br>


##### Example. 위상의 예
> * $$\mathcal{T}_D = \{X$$의 모든 부분집합$$\}$$ : 이산 위상
> * $\mathcal{T}_T = \{\varnothing ,X\}$ : 비이산 위상, 당연 위상
> * $$\mathcal{T}_f = \{U\mid X-U$$가 유한집합이거나 $$X - U = X\}$$ : 여유한 위상(finite complement)
>> $$(\because)$$ $$\mathcal{T}_f$$가 $X$의 위상인 이유  
>> &nbsp;&nbsp; ⅰ. $X - X = \varnothing$, $X - \varnothing = X$ 이므로  $$\varnothing, X\in \mathcal{T}_f$$  
>> &nbsp;&nbsp; ⅱ. $$\mathcal{T}_f$$의 공집합이 아닌 원소들의 첨수족 $$\{U_\alpha\}_{\alpha\in\mathcal{A}}$$에 대하여  
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $$X - \bigcup \limits_{\alpha\in\mathcal{A}}U_{\alpha}$$ $$ = $$ $$X \cap (\bigcup \limits_{\alpha\in\mathcal{A}}U_{\alpha})^c$$ $$ = $$ $$\bigcap \limits_{\alpha\in\mathcal{A}}(X - U_{\alpha})$$ 이 유한집합이다  
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 따라서 $$\forall\alpha\in\mathcal{A}$$, $$U_{\alpha}\in\mathcal{T}_f \to \bigcup \limits_{\alpha\in\mathcal{A}} U_{\alpha} \in \mathcal{T}_f$$이다  
>> &nbsp;&nbsp; ⅲ.



---