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

## 🧠 Skills

**Machine Learning:** Classification, Regression, Clustering, PCA  
**Deep Learning:** CNNs, DNNs, GANs, RNNs, VAEs, LSTMs, Flow Models, Autoregressive Models, Transformers
**Core Competencies:** Machine Learning, Deep Learning, Image Processing, Signal Processing
**Programming Languages:** Python, C/C++, MATLAB, SQL, Verilog HDL
**Tools and Platforms:** PyTorch, TensorFlow, CUDA, SQL, Django, COMSOL Multiphysics, JMP
**Embedded Systems:** FreeRTOS,FreeRTOS, Nucleus RTOS, SPI/I2C Protocols, ARM DStream, STM32, Ultrazed Board, RISC-V

- Machine Learning: Classification, Regression, Clustering, PCA  
- Deep Learning: CNNs, DNNs, GANs, RNNs, VAEs, LSTMs, Flow Models, Autoregressive Models, Transformers  
- Core Competencies: Machine Learning, Deep Learning, Image Processing, Signal Processing  
- Programming Languages: Python, C/C++, MATLAB, SQL, Verilog HDL  
- Tools and Platforms: PyTorch, TensorFlow, CUDA, SQL, Django, COMSOL Multiphysics, JMP  
- Embedded Systems: FreeRTOS, Nucleus RTOS, SPI/I2C Protocols, ARM DStream, STM32, Ultrazed Board, RISC-V  


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

Rapid AI-Based Gradient Echo Enhancement for Cardiac Imaging  
- Developed a Plug-and-Play reconstruction framework for Cardiac MRE, enabling ~2× faster acquisition using a CNN-based denoiser within an ADMM optimization framework.
- Implemented transfer learning by pretraining the denoiser on fully sampled cardiac MRI data and fine-tuning it on Cardiac MRE data to improve reconstruction performance.

Deep Learning–Based Stiffness Estimation in MR Elastography (MRE)  
- Developed a state-of-the-art AI-driven pipeline for MRE stiffness map reconstruction using U-Net architectures and FEM-based synthetic datasets, outperforming conventional inversion methods.
- Applied domain adaptation techniques to bridge simulated and in vivo datasets, ensuring robust performance on real-world clinical data.
- Published and presented research findings at the International Society for Magnetic Resonance in Medicine (ISMRM) conference.

---

### Embedded Firmware Developer — Siemens Digital Industries Software  
*Lahore, Pakistan | Apr 2022 – Aug 2022*

- Developed software-based testing solutions for validating I2C and SPI communication protocols, reducing reliance on hardware test benches.
- Simulated master–slave communication using ARM DStream on Ultrazed and BeagleBone Black platforms to streamline testing workflows.
- Improved system efficiency through advanced debugging, performance analysis, and protocol validation strategies.


---

### 📡 Project Intern — Next Generation Wireless Networking Laboratory (KICS, UET)  
*Lahore, Pakistan | Jun 2021 – Apr 2022*

- Developed a real-time AI-driven railway track anomaly detection system using multimodal sensors and STM32 microcontrollers.
- Integrated embedded firmware, sensor fusion, and ML-based inference for field-deployable monitoring applications.

---

## 🎓 Education

- Bachelor's in Economics and Statistics | [University Name] | June 2016 – Jan 2020 | GPA: 3.7
- High School., maths | School Name | June 2012 – Jan 2015 | Score: 99%

---

## 📜 Certifications & Awards

- Google Associate Data Practitioner Certificate  
- Best Student Award – Classification of Healthcare Documents  
- 4th Place – Data Analytics Hackathon (University-level)

---

## ❤️ Volunteer Experience

- Conducted weekend programming workshops for underprivileged high school students
- Coordinated logistics for fundraising race events supporting children’s education

---

## 📬 Let’s Connect!

- 📧 Email: [Your Email]  
- 🔗 LinkedIn: [LinkedIn Profile]  
- 💻 GitHub: [GitHub Portfolio]

---

Thanks for stopping by! Feel free to explore my repositories and reach out if you'd like to collaborate or connect.
