<style>
/* Connect bar (not a card) */
.connect-bar{
  margin: 14px 0 22px 0;
  padding: 14px 16px;
  border-radius: 18px;
  background: linear-gradient(90deg, rgba(31,111,235,0.10), rgba(46,125,50,0.08));
  border: 1px solid rgba(31,111,235,0.20);
}

.connect-title{
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 10px;
}

.connect-links{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.connect-pill{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  background: rgba(255,255,255,0.8);
  border: 1px solid rgba(0,0,0,0.10);
  transition: transform 0.15s ease, background 0.15s ease;
}

.connect-pill:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,1);
}

/* Small dot accents */
.dot{ width:10px; height:10px; border-radius:50%; display:inline-block; }

/* Optional: distinct colors per platform */
.dot-gmail{ background:#D14836; }
.dot-outlook{ background:#0078D4; }
.dot-linkedin{ background:#0A66C2; }
.dot-github{ background:#181717; }
.dot-cv{ background:#2E7D32; }
</style>






<style>
.section-header {
  display: inline-block;
  padding: 8px 16px;
  margin: 28px 0 14px 0;
  border-radius: 14px;
  background: rgba(31,111,235,0.10);
  border: 1px solid rgba(31,111,235,0.35);
  font-weight: 700;
  font-size: 20px;
}
</style>

<style>
/* Cards */
.card {
  border: 1px solid rgba(31,111,235,0.25);
  border-radius: 16px;
  padding: 16px 18px;
  margin: 14px 0;
  background: rgba(31,111,235,0.06);
}

/* A more neutral card (for secondary sections) */
.card-muted {
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 16px;
  padding: 16px 18px;
  margin: 14px 0;
  background: rgba(0,0,0,0.03);
}

/* Small badge pills (keywords) */
.badge {
  display: inline-block;
  padding: 4px 10px;
  margin: 4px 6px 0 0;
  border-radius: 999px;
  border: 1px solid rgba(31,111,235,0.30);
  background: rgba(31,111,235,0.08);
  font-size: 12px;
  font-weight: 600;
}
</style>


<style>
/* ===== Top Navigation Buttons ===== */
.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 18px;
}

.nav-btn {
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid #1f6feb;
  background-color: #ffffff;
  color: #1f6feb;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.nav-btn:hover {
  background-color: #1f6feb;
  color: #ffffff;
  transform: translateY(-1px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>

<div class="navbar">
  <a href="#profile-summary"><button class="nav-btn">👤 Profile</button></a>
  <a href="#connect"><button class="nav-btn">📬 Connect</button></a>
  <a href="#research"><button class="nav-btn">🧪 Research</button></a>
  <a href="#publications"><button class="nav-btn">📚 Publications</button></a>
  <a href="#education"><button class="nav-btn">🎓 Education</button></a>
  <a href="#skills"><button class="nav-btn">🧠 Skills</button></a>
  <a href="#presentations"><button class="nav-btn">🎤 Talks</button></a>
  <a href="#experience"><button class="nav-btn">💼 Experience</button></a>
  <a href="#services"><button class="nav-btn">🤝 Leadership</button></a>
  <a href="#awards"><button class="nav-btn">🏅 Awards</button></a>
</div>

<hr>


<a id="profile-summary"></a>

<div class="card">
  <h2>👤 Profile Summary</h2>

  <p>
    I develop signal processing, optimization, and deep learning methods to solve inverse problems in Magnetic Resonance Elastography (MRE).
    My doctoral research focuses on fast and accurate tissue stiffness estimation using FEM-driven simulation pipelines, Deep Learning, and
    accelerated MRE acquisition and reconstruction strategies, including simultaneous multislice MRE (SMS-MRE).
  </p>

  <p>
    I design deep learning–based inversion and reconstruction frameworks (DIME, 3D-DIME) to recover high-quality stiffness maps from noisy
    and highly aliased MRE wavefields. By integrating finite-element MRE physics with data-driven DL models, my work improves the robustness,
    accuracy, and clinical feasibility of MRE stiffness mapping.
  </p>

  <p>
    I am co-advised by
    <a href="https://scholar.google.com/citations?hl=en&user=9mbdAO4AAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer">
      Prof. Rizwan Ahmad
    </a>
    and
    <a href="https://scholar.google.com/citations?user=rhip9d0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
      Prof. Arunark Kolipaka
    </a>
    at The Ohio State University.
  </p>

  <div style="margin-top:10px;">
    <span class="badge">MRE Inverse Problems</span>
    <span class="badge">FEM Simulation</span>
    <span class="badge">Deep Learning Inversion</span>
    <span class="badge">SMS-MRE</span>
    <span class="badge">Reconstruction</span>
  </div>
</div>

<hr>






<a id="connect"></a>
<div class="section-header">📬 Connect with Me</div>

[![Gmail](https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white)](mailto:khan.hassan13579@gmail.com)
[![Outlook](https://img.shields.io/badge/Outlook-0078D4?logo=microsoft-outlook&logoColor=white)](mailto:iftikhar.15@buckeyemail.osu.edu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hassan-iftikhar-8305a9191/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/HassanIftikhar013)
[![CV](https://img.shields.io/badge/CV-PDF-2E7D32?logo=adobe-acrobat-reader&logoColor=white)](https://buckeyemailosu-my.sharepoint.com/:b:/g/personal/iftikhar_15_buckeyemail_osu_edu/IQA-NxavYZvhRZ7-ziG5ADNtAWXvoh7Lho5YQbgH6ECnZOQ?e=uOGx8p)


---



<a id="research"></a>
<div class="section-header">🧪 Research Projects</div>


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
  - Code: [Github Code Link](https://github.com/HassanIftikhar013/DIME)

### 2️⃣    3D-DIME – Extension of DIME for 3D MR Elastography

[![3D-DIME Project Thumbnail](images/3d-dime.png)](#)

- Extends the DIME framework from 2D slices to 3D MRE acquisitions, improving anatomical consistency across slices.
- Trained on 3D volumetric FEM phantoms for liver and brain applications, incorporating realistic anatomy and material heterogeneity.
- Status:
   - Proof of technique demonstrated in abstract submitted to ISMRM 2026 focusing on 3D stiffness reconstruction performance. [Abstract Link](https://buckeyemailosu-my.sharepoint.com/:b:/g/personal/iftikhar_15_buckeyemail_osu_edu/IQB19sSnAYfGS6msOVQwUyv5ASnUST0Gdahftx7S7CFtJkE?e=vs2JRO)
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
<a id="publications"></a>
<div class="section-header">📚 Publications & Research Work</div>

### Journal Articles

**DIME: Deep Learning Driven Inversion Framework for Shear Modulus Estimation in Magnetic Resonance Elastography (2025)** 
- Authors: H. Iftikhar, R. Ahmad, A. Kolipaka  
- Journal: *Magnetic Resonance in Medicine (MRM)* — under review  
- Code: [GitHub Code Link](https://github.com/HassanIftikhar013/DIME)  
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
<a id="presentations"></a>
<div class="section-header"> 🎤 Presentations and Talks</div>

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
<a id="skills"></a>
<div class="section-header"> 🧠 Skills</div>

- **Machine Learning:** Classification, Regression, Clustering, PCA  
- **Deep Learning:** CNNs, DNNs, GANs, RNNs, VAEs, LSTMs, Flow Models, Autoregressive Models, Transformers  
- **Core Competencies:** Machine Learning, Deep Learning, Image Processing, Signal Processing  
- **Programming Languages:** Python, C/C++, MATLAB, SQL, Verilog HDL  
- **Tools and Platforms:** PyTorch, TensorFlow, CUDA, SQL, Django, COMSOL Multiphysics, JMP  
- **Embedded Systems:** FreeRTOS, Nucleus RTOS, SPI/I2C Protocols, ARM DStream, STM32, Ultrazed Board, RISC-V  

---
<a id="education"></a>
<div class="section-header"> 🎓 Education</div>

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
<a id="experience"></a>
<div class="section-header"> 💼 Professional Experience</div>

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

<a id="services"></a>
<div class="section-header"> 🤝 Leadership & Service</div>

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
<a id="awards"></a>
<div class="section-header"> 🏅 Honors & Awards</div>

**2022**  
Distinction in Signals Processing course among 142 students  
The Ohio State University

---

**2018 – 2022**  
National Talent Scholarship  
- Awarded throughout high school and undergraduate studies  
- Granted to the top 30 students at the state level based on academic performance

---



