---
sidebar_position: 2
---

# What are Diffusion Models?

Diffusion (or Diffusion process) is a well-known and explored domain in non-equilibrium statistical physics and thermodynamics.

In simple terms – “Diffusion Models are a class of probabilistic generative models that turn noise to a representative data sample.”

Diffusion Models can be summarized as systematically and slowly destroy the structure in a data distribution through an iterative forward diffusion process. We then learn a reverse diffusion process that restores the structure in data, yielding a highly flexible and tractable generative model of the data. This approach allows us to rapidly learn, sample from, and evaluate probabilities in deep generative models.
*- Deep Unsupervised Learning using Nonequilibrium Thermodynamics, 2015*

![Diffusion Model GIF](https://learnopencv.com/wp-content/uploads/2023/01/diffusion-models-unconditional_image_generation.gif)


These Diffusion Models are used in many popular image generators like OpenAI-Dall-E2, Clipdrop, Glide, Imagen, and Stable Diffusion.


# Principle Behind Diffusion Models

Diffusion models are a class of generative models used in deep learning to generate data samples, particularly images. They are grounded in concepts from non-equilibrium statistical physics and thermodynamics. The primary concept behind diffusion models is to gradually transform noise into a representative data sample through a controlled diffusion process. Here's a breakdown of how diffusion models operate:

1. **Initial Noise Generation**: The process commences with the generation of initial noise, typically derived from a simple distribution like Gaussian noise.

2. **Iterative Forward Diffusion**: The noise experiences an iterative forward diffusion process. At each iteration, controlled transformations are applied to the noise. These transformations can be envisioned as adding minor perturbations to the noise. As these perturbations accumulate over iterations, the structured nature of the data gradually diminishes.

3. **Structure Destruction**: As the diffusion process progresses, the initial noise's inherent structure is systematically dismantled. The noise becomes progressively more intricate, resembling random noise by the process's conclusion.

4. **Learning Reverse Diffusion**: To generate meaningful samples, a reverse diffusion process is learned. This process takes the highly disordered noise and reconstructs a meaningful data sample. During training, the model learns this reverse diffusion process by reconstructing original data samples from the disordered noise.

5. **Sampling and Generation**: Once the reverse diffusion process is learned, the model can generate new samples by commencing with disordered noise and applying the reverse diffusion process. This generates samples that gradually regain structure as the reverse process unfolds.

Diffusion models offer several advantages:

- **Learning Complex Data Distributions**: They have the capability to learn intricate data distributions and generate diverse samples.

- **Principled Sample Generation**: They provide a principled approach to generating samples using both forward and reverse diffusion processes.

- **Efficient Sampling and Probability Evaluation**: The learned reverse diffusion process enables efficient sampling and probabilistic evaluation.

In essence, diffusion models amalgamate principles from physics, probability theory, and deep learning, presenting an innovative approach to generative modeling, particularly within the domain of image generation. They find applications in various fields, including image synthesis and other generative tasks.
