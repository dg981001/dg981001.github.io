---
layout: post
title: '위상적 공간'
author: LK
date: 2019-05-31 12:00
tags: [topology,mathematics]
mathjax: false
#image: /files/covers/kubernetes.png
---

##### Definition. 위상공간
>집합 $X$에 대해 $X$의 부분집합의 모임 $\mathcal{T}$이 다음 성질을 맍고할 때 $\mathcal{T}$를 $X$의 위상이라고 한다.
>> i. $\varnothing,X\in\mathcal{T}$  
>> ii. $\{O_i\mid i\in I \}\subseteq \mathcal{T}$ 에 대하여 $\bigcup \limits_{i\in I} O_{i} \in \mathcal{T}$  
>> iii. $O_1, O_2, ..., O_k \in \mathcal{T}$ 에 대하여 $O_1 \cap O_2 \cap ... \cap O_k \in \mathcal{T}$
>>  
>
> 이때, 위상 $\mathcal{T}$ 가 주어진 집합 $X$를 $(X, \mathcal{T})$로 표기하고 위상공간이라 한다.

<br>


##### Definition. 열린집합(Open set)
> 위상 $\mathcal{T}$가 주어진 위상공간 $X$에 대하여 $U \subseteq X, U \in \mathcal{T}$ 이면 $U$를 열린집합이라 한다.

<br>


##### Remark
> 위상공간이란, 열린집합이라고 불리는 부분집합의 모임이 주어진 집합
>> * $\varnothing, X$ : 열린집합
>> * 열린집합의 임의의 합집합은 열린집합
>> * 열린집합의 임의의 교집합은 열린집합

<br>


##### Example
> * $$\mathcal{T}_D = \{X$$의 모든 부분집합$$\}$$ : 이산 위상
> * $\mathcal{T}_T = \{\varnothing ,X\}$ : 비이산 위상, 당연 위상
> * $$\mathcal{T}_f = \{U\mid X-U$$가 유한집합이거나 $$X - U = X\}$$ : 여유한 위상(finite complement)
