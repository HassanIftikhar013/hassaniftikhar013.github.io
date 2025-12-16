## Hassan Iftikhar
### Ph.D. Candidate, Dept. of Biomedical Engineering | The Ohio State University


I work on developing and applying signal processing, optimization, and deep 
learning techniques for solving inverse problems in magnetic resonance 
elastography (MRE). My doctoral research focuses on 
accurate and rapid stiffness estimation using FEM-driven simulation pipelines, 
physics-informed inverse problem formulations, and accelerated MRE acquisition 
and reconstruction strategies such as simultaneous multislice (SMS-MRE). 

I also work extensively on recovering high-quality stiffness maps from 
noisy and highly aliased MRE-wave images through a combination of deep learning models 
(DIME, 3D-DIME) and DL-based reconstruction. My work integrates 
MRE physics simulation using FEM, and Deep Learning to improve robustness and 
clinical feasibility of MRE stiffness mapping. 

I am co-advised by **Prof. Rizwan Ahmad** and **Prof. Arunark Kolipaka** at 
The Ohio State University.

---

## 📬 Connect with Me

[![Gmail](https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white)](mailto:khan.hassan13579@gmail.com)
[![Outlook](https://img.shields.io/badge/Outlook-0078D4?logo=microsoft-outlook&logoColor=white)](mailto:iftikhar.15@buckeyemail.osu.edu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hassan-iftikhar-8305a9191/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/HassanIftikhar013)


---

## 🧪 Research Projects


### 1️⃣    DIME – Deep Learning Driven Inversion Framework for Shear Modulus Estimation in MRE

[![DIME Project Thumbnail](images/dime.png)](#)

- Trains a U-Net–style model on FEM-generated phantoms to reconstruct shear modulus maps from complex-valued displacement fields. 
- Evaluated on homogeneous, heterogeneous, and anatomy-informed phantoms as well as in vivo liver MRE data.
- Demonstrated:
  - High correlation with ground truth stiffness.
  - Reduced bias vs. traditional inversion methods.
  - Sharper recovery of localized stiffness changes (e.g., inclusions, focal lesions).
  - Performance for in vivo liver applications.
- Status:
  - Journal manuscript *“DIME: Deep Learning Driven Inversion Framework for Shear Modulus Estimation in Magnetic Resonance Elastography”* under review in Magnetic Resonance in Medicine (MRM).
  - Preprint: [https://arxiv.org/abs/2512.13010](https://arxiv.org/abs/2512.13010)
  - Code: [**Github Code Link**](https://github.com/HassanIftikhar013/DIME)

### 2️⃣    3D-DIME – Extension of DIME for 3D MR Elastography

[![3D-DIME Project Thumbnail](images/3d-dime.png)](#)

- Extends the DIME framework from 2D slices to 3D MRE acquisitions, improving anatomical consistency across slices.
- Trained on 3D volumetric FEM phantoms for liver and brain applications, incorporating realistic anatomy and material heterogeneity.
- Status:
   - Proof of technique demonstrated in abstract submitted to ISMRM 2026 focusing on 3D stiffness reconstruction performance. [**Abstract Link**](https://buckeyemailosu-my.sharepoint.com/:b:/g/personal/iftikhar_15_buckeyemail_osu_edu/IQB19sSnAYfGS6msOVQwUyv5ASnUST0Gdahftx7S7CFtJkE?e=vs2JRO)
  -  3D-MRE acquisition for breast tumour application is in process.
  -  Journal Manuscript in preparation, demonstrating:
      - Superiority of 3D MRE over conventional 2D MRE.
      - Broader MRE applications enabled with fully 3D wavefield acquisitions.
      - Focus on Breast MRE with additional applications shown.

### 3️⃣ Deep Learning–based Reconstruction for SMS-Accelerated MRE

[![SMS-MRE Project Thumbnail](images/sms-mre.png)](#)
- Developed a deep learning reconstruction pipeline for SMS-accelerated MRE, combining:
  - SMS-EPI acquisition schemes.
  - Learned reconstruction that suppresses aliasing and noise.   
- Application areas:
  - Liver MRE: reduction in effective breath-hold duration.
  - Ongoing work on lung MRE at low field (0.55T) with increased multiband factors.
- Submitted abstract to ISMRM 2026.

---

## 📚 Publications & Research Work

### Journal Articles

**DIME: Deep Learning Driven Inversion Framework for Shear Modulus Estimation in Magnetic Resonance Elastography (2025)** 
- Authors: H. Iftikhar, R. Ahmad, A. Kolipaka  
- Journal: *Magnetic Resonance in Medicine (MRM)* — under review  
- Code: GitHub Code Link  
- Preprint: [https://arxiv.org/abs/2512.13010](https://arxiv.org/abs/2512.13010)  

---

### Peer-Reviewed Conference Abstracts

**DIME: Deep Learning Driven Inversion Framework for Shear Modulus Estimation in Magnetic Resonance Elastography (2026)**  
- Authors: H. Iftikhar, R. Ahmad, A. Kolipaka  
- Conference: *International Society for Magnetic Resonance in Medicine (ISMRM) 2026 Annual Meeting*, Cape Town, South Africa  
- Status: Submitted; anticipated publication in *Proc. Intl. Soc. Mag. Reson. Med.*, Vol. 34  
- Link: [https://buckeyemail.sharepoint/DIME](https://buckeyemailosu-my.sharepoint.com/:b:/g/personal/iftikhar_15_buckeyemail_osu_edu/IQDKAXtVS70MToL8omNfWuacAabVS4WzjlWtsIllA92UL1E?e=07yM5k)  

**3D-DIME: Deep Learning Driven Inversion Framework for 3D Magnetic Resonance Elastography (2026)**  
- Authors: H. Iftikhar, R. Ahmad, A. Kolipaka  
- Conference: *International Society for Magnetic Resonance in Medicine (ISMRM) 2026 Annual Meeting*, Cape Town, South Africa  
- Status: Submitted; anticipated publication in *Proc. Intl. Soc. Mag. Reson. Med.*, Vol. 34  
- Link: [https://buckeyemail.sharepoint/3D-DIME](https://buckeyemailosu-my.sharepoint.com/personal/iftikhar_15_buckeyemail_osu_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fiftikhar%5F15%5Fbuckeyemail%5Fosu%5Fedu%2FDocuments%2FAbstracts%2F3D%2DDIME%2Dabstract%2D2025%2Epdf&parent=%2Fpersonal%2Fiftikhar%5F15%5Fbuckeyemail%5Fosu%5Fedu%2FDocuments%2FAbstracts&ga=1)  

**Deep Learning–Based Reconstruction for Simultaneous Multislice (SMS)–Accelerated Magnetic Resonance Elastography (2026)**  
- Authors: H. Iftikhar, R. Ahmad, A. Kolipaka  
- Conference: *International Society for Magnetic Resonance in Medicine (ISMRM) 2026 Annual Meeting*, Cape Town, South Africa  
- Status: Submitted; anticipated publication in *Proc. Intl. Soc. Mag. Reson. Med.*, Vol. 34  
- Link: [https://buckeyemail.sharepoint/SMS-MRE](https://buckeyemailosu-my.sharepoint.com/personal/iftikhar_15_buckeyemail_osu_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fiftikhar%5F15%5Fbuckeyemail%5Fosu%5Fedu%2FDocuments%2FAbstracts%2FSMS%2DMRE%2Dabstract%2D2025%2Epdf&parent=%2Fpersonal%2Fiftikhar%5F15%5Fbuckeyemail%5Fosu%5Fedu%2FDocuments%2FAbstracts&ga=1)  

**Curating Dataset for AI-Based Stiffness Estimation in MR Elastography Using Finite Element Modeling and Polynomial Curve Fitting (2025)**  
- Authors: H. Iftikhar, R. Ahmad, A. Kolipaka  
- Conference: *International Society for Magnetic Resonance in Medicine (ISMRM) 2025 Annual Meeting*, Honolulu, Hawaiʻi  
- Publication: *Proc. Intl. Soc. Mag. Reson. Med.*, Vol. 33  
- Link: [ISMRM’25 Link](https://archive.ismrm.org/2025/4000_8x8Z7BRJ4.html)  

**Revolutionizing MR Elastography: Deep Learning-Powered Stiffness Map Reconstruction from Sparse Wavefield Data (2024)**  
- Authors: H. Iftikhar, R. Ahmad, A. Kolipaka  
- Conference: *International Society for Magnetic Resonance in Medicine (ISMRM) 2024 Annual Meeting*, Singapore  
- Publication: *Proc. Intl. Soc. Mag. Reson. Med.*, Vol. 33  
- Link: [ISMRM’24 Link](https://archive.ismrm.org/2024/2815.html)  

---

## 🎤 Presentations and Talks

**2026 (Upcoming)**  
“DIME: Deep Learning Driven Inversion Framework for Shear Modulus Estimation in Magnetic Resonance Elastography”  
- Hayes Advanced Research Forum, Columbus, OH

---

**2026 (Upcoming)**  
“DIME: Deep Learning Driven Inversion Framework for Shear Modulus Estimation in Magnetic Resonance Elastography”  
- ISMRM 2026: Image Reconstruction and AI Session, Cape Town, South Africa

---

**2025**  
“Curating Dataset for AI-Based Stiffness Estimation in MR Elastography Using Finite Element Modeling and Polynomial Curve Fitting”  
- ISMRM 2025: Acquisition and Reconstruction Session, Honolulu, Hawaiʻi

---

**2024**  
“Revolutionizing MR Elastography: Deep Learning-Powered Stiffness Map Reconstruction from Sparse Wavefield Data”  
- ISMRM 2024: Image Reconstruction and AI Session, Singapore

---

## 🧠 Skills

- **Machine Learning:** Classification, Regression, Clustering, PCA  
- **Deep Learning:** CNNs, DNNs, GANs, RNNs, VAEs, LSTMs, Flow Models, Autoregressive Models, Transformers  
- **Core Competencies:** Machine Learning, Deep Learning, Image Processing, Signal Processing  
- **Programming Languages:** Python, C/C++, MATLAB, SQL, Verilog HDL  
- **Tools and Platforms:** PyTorch, TensorFlow, CUDA, SQL, Django, COMSOL Multiphysics, JMP  
- **Embedded Systems:** FreeRTOS, Nucleus RTOS, SPI/I2C Protocols, ARM DStream, STM32, Ultrazed Board, RISC-V  


---

## 💼 Professional Experience

### Machine Learning & Software Development Intern — BLOMSO  
*Columbus, OH | May 2025 – Aug 2025*

- Developed an AI-based pipeline to assess soil nutrient levels in agricultural lands.
- Designed custom data acquisition hardware integrating spectrometers and sensors for on-site soil nutrient measurements.
- Conducted an extensive literature review and implemented a full end-to-end ML pipeline for soil nutrient prediction under limited-data scenarios.
- Trained and optimized neural network models for small datasets, achieving accurate nutrient estimation despite sparse field measurements.

---

### Graduate Research Associate — OSU Wexner Medical Center  
*Columbus, OH | Aug 2022 – Present*

Deep Learning–Based Stiffness Estimation in MR Elastography (MRE)  
- Developed a state-of-the-art AI-driven pipeline for MRE stiffness map reconstruction using U-Net architectures and FEM-based synthetic datasets, outperforming conventional inversion methods.
- Applied domain adaptation techniques to bridge simulated and in vivo datasets, ensuring robust performance on real-world clinical data.
- Published and presented research findings at the International Society for Magnetic Resonance in Medicine (ISMRM) conference.

Rapid AI-Based Gradient Echo Enhancement for Cardiac Imaging  
- Developed a Plug-and-Play reconstruction framework for Cardiac MRE, enabling ~2× faster acquisition using a CNN-based denoiser within an ADMM optimization framework.
- Implemented transfer learning by pretraining the denoiser on fully sampled cardiac MRI data and fine-tuning it on Cardiac MRE data to improve reconstruction performance.

---

### Embedded Firmware Developer — Siemens Digital Industries Software  
*Lahore, Pakistan | Apr 2022 – Aug 2022*

- Developed software-based testing solutions for validating I2C and SPI communication protocols, reducing reliance on hardware test benches.
- Simulated master–slave communication using ARM DStream on Ultrazed and BeagleBone Black platforms to streamline testing workflows.
- Improved system efficiency through advanced debugging, performance analysis, and protocol validation strategies.

---

### Project Intern — Next Generation Wireless Networking Laboratory (KICS, UET)  
*Lahore, Pakistan | Jun 2021 – Apr 2022*

- Developed a real-time AI-driven railway track anomaly detection system using multimodal sensors and STM32 microcontrollers.
- Integrated embedded firmware, sensor fusion, and ML-based inference for field-deployable monitoring applications.

---
## 🎓 Education

### Ph.D. in Computational Imaging and Machine Learning  
*The Ohio State University, Columbus, OH | Aug 2022 – April 2027*  
GPA: 3.8 / 4.0  

- Research Interests: Machine Learning, Advanced Signal Processing, Biomedical Imaging, Convex Optimization, Stochastic Processes, Reinforcement Learning
- Advisors: [Dr. Arunark Kolipaka](linkedin.com/in/arunark-kolipaka-phd-faha-fscmr-501b651b), [Dr. Rizwan Ahmad](https://scholar.google.com/citations?hl=en&user=9mbdAO4AAAAJ&view_op=list_works&sortby=pubdate)

---

### B.S. in Electrical and Computer Engineering  
*University of Engineering and Technology (UET), Lahore, Pakistan | Oct 2018 – May 2022*  
GPA: 3.6 / 4.0  

- Areas of Interest: Machine Learning, Embedded Systems, Computer Architecture
- Advisor: [Dr. Muhammad Tahir](https://scholar.google.com.pk/citations?user=52OLKmgAAAAJ&hl=en)

---


## 🤝 Leadership & Service

**2023 – 2024**  
Peer Mentor, Peer2Peer Mentoring Program  
Biomedical Engineering Graduate Student Association (BMEGSA)  
- Guided incoming PhD students during their transition from undergraduate or master’s programs to graduate research and academic life.
- Provided support on navigating coursework, advisor communication, and departmental expectations.
- Helped new students integrate into the BME community through regular check-ins and resource sharing.

---

**2022 – 2024**  
Mentor, Undergraduate Research Mentorship  
- Supervised an undergraduate student over one academic year, providing guidance on graduate school admissions and research planning.

---

**2023 – 2025**  
Speaker, PhD Admissions Guidance Sessions  
University of Engineering and Technology (UET), Lahore  
- Hosted annual webinars guiding students on U.S. PhD admissions, application strategy, and research alignment.
- Invited by IEEE Student Affairs at UET Lahore to share personal academic and research journey (December 2025).

---

**2022**  
Volunteer & Outreach Lead, Indus Hospital Fundraiser  
Columbus Convention Center, Columbus, OH  
- Helped raise $125,000 for flood victims in Pakistan through a large-scale fundraising event (October 2022).

---

**2022 – 2025**  
Volunteer, International Friendship Inc. (IFI)  
Columbus, OH  
- Supported incoming international graduate students with arrival logistics, housing guidance, and orientation to campus and city life.
- Invited by the International Student Affairs Committee at OSU to share personal transition and graduate journey (March 2025).

---

## 🏅 Honors & Awards

**2022**  
Distinction in Signals Processing course among 142 students  
The Ohio State University

---

**2022**  
Best Project in Computer Engineering Award  
Department of Electrical Engineering, University of Engineering and Technology (UET), Lahore, Pakistan

---

**2018 – 2022**  
National Talent Scholarship  
- Awarded throughout high school and undergraduate studies  
- Granted to the top 30 students at the state level based on academic performance

---



