// All project case-study content lives here, separate from index.html.
// Modals are built on demand in script.js — this keeps the initial DOM small
// and makes it trivial to add/edit a project without touching markup.

const PROJECTS = {

  "modal-aqm": {
    title: "Air Quality Monitoring (AQM) Devices",
    type: "Work-Related · Internship",
    year: "2024 – 2025",
    tech: ["C++", "E-paper Display", "IoT"],
    repo: { label: "View on LinkedIn", url: "https://www.linkedin.com/in/hashin-gayasha-maharambage-350191285/details/projects/" },
    media: {},
    body: `
      <h4>Project Overview</h4>
      <p>Developed C++ software for e-paper displays and carried out regular maintenance of AQM devices to ensure accurate and reliable performance during the internship period.</p>
    `
  },

  "modal-ble": {
    title: "QR Code Scanning — BLE Self-Payment System",
    type: "Work-Related · Internship",
    year: "2024 – 2025",
    tech: ["BLE", "QR Code", "Flutter"],
    repo: { label: "View on LinkedIn", url: "https://www.linkedin.com/in/hashin-gayasha-maharambage-350191285/details/projects/" },
    media: {},
    body: `
      <h4>Project Overview</h4>
      <p>Implemented BLE-based self-payment systems, enabling secure and efficient QR code scanning for seamless transaction processing without requiring active client internet infrastructure.</p>
    `
  },

  "modal-bpe": {
    title: "Automation of BPE Folding Machine",
    type: "Work-Related · Industrial Automation",
    year: "2025 – 2026",
    tech: ["Omron CP1E", "CX Programmer", "Pneumatics", "Kinco HMI", "RS-232"],
    repo: { label: "Proprietary / Internal" },
    media: {
      images: [
        { src: "Projects/BPE%20folding%20machine/cad1.png", alt: "CAD model of the automated BPE folding machine, view 1", caption: "CAD Design 1" },
        { src: "Projects/BPE%20folding%20machine/cad2.png", alt: "CAD model of the automated BPE folding machine, view 2", caption: "CAD Design 2" },
        { src: "Projects/BPE%20folding%20machine/r.png", alt: "The completed BPE folding machine, fully built and assembled", caption: "Final Build" },
        { src: "Projects/BPE%20folding%20machine/h1.png", alt: "RS-232 serial connection setup between the HMI and the Omron CP1E PLC", caption: "PLC ↔ HMI Serial Link (RS-232)" },
        { src: "Projects/BPE%20folding%20machine/h2.png", alt: "Kinco HMI screen 1 for the BPE folding machine", caption: "HMI Screen 1" },
        { src: "Projects/BPE%20folding%20machine/h3.png", alt: "Kinco HMI screen 2 for the BPE folding machine", caption: "HMI Screen 2" },
        { src: "Projects/BPE%20folding%20machine/h4.png", alt: "Kinco HMI screen 3 for the BPE folding machine", caption: "HMI Screen 3" }
      ]
    },
    body: `
      <h4>Problem</h4>
      <ul>
        <li>The BPE (Body Protective Equipment) folding process was heavily dependent on manual labour.</li>
        <li>Manual folding resulted in lower efficiency, inconsistent output, and higher labour requirements.</li>
        <li>The Global Engineering and Manufacturing Technology Department identified the need for an automated folding mechanism.</li>
        <li>No previous machine designs existed, so the system had to be built from scratch.</li>
      </ul>
      <h4>Solution &amp; Outcome</h4>
      <ul>
        <li>Worked on the project from the concept stage through to completion.</li>
        <li>Helped design the mechanical system and supported prototype building and assembly.</li>
        <li>Developed the control system using an Omron CP1E PLC and CX Programmer.</li>
        <li>Added a soft-start pneumatic valve to pressurise the system and improve startup safety.</li>
        <li>Installed and wired limit switches for the BPE folding bed.</li>
        <li>Installed pneumatic tubing between valves and actuators for the folding system.</li>
        <li>Installed 20 reed switches across 10 pneumatic actuators, connected to PLC inputs for position monitoring.</li>
        <li>Set up RS-232 communication between the PLC and HMI.</li>
        <li>Designed and programmed the HMI using Kinco HMI Ware, including Auto/Manual modes, Start/Stop, Home position, and Emergency Stop.</li>
        <li>Performed testing, troubleshooting, and final commissioning of the machine.</li>
      </ul>
    `
  },

  "modal-reverse": {
    title: "Reverse Engineering of Industrial Components and Systems",
    type: "Work-Related · Mechanical Design",
    year: "2025 – 2026",
    tech: ["SolidWorks", "CAD Layouts", "Calculations"],
    repo: { label: "Proprietary / Internal" },
    media: {
      images: [
        { src: "Projects/Reverse%20engineering/Machine1/C1%20%281%29.png", alt: "CAD model of the reverse-engineered Ven Pack machine frame, bare steel structure", caption: "Ven Pack Frame — Bare Steel CAD" },
        { src: "Projects/Reverse%20engineering/Machine1/C1%20%282%29.png", alt: "CAD model of the Ven Pack machine frame with sheet metal cladding fitted", caption: "Ven Pack Frame — With Cladding" },
        { src: "Projects/Reverse%20engineering/Machine1/C1%20%283%29.png", alt: "CAD model of the Ven Pack machine frame with cladding, alternate view", caption: "Ven Pack Frame — Cladding Detail" },
        { src: "Projects/Reverse%20engineering/Machine1/R.jpeg", alt: "The real Ven Pack machine on the shop floor after reverse engineering", caption: "Ven Pack Machine — Real Build" },
        { src: "Projects/Reverse%20engineering/MAchine2/C%20%281%29.png", alt: "CAD model of the linear actuator carriage and mounting bracket assembly", caption: "Linear Actuator — Carriage CAD" },
        { src: "Projects/Reverse%20engineering/MAchine2/C%20%282%29.png", alt: "CAD model of the full linear actuator assembly with motor mount", caption: "Linear Actuator — Full Assembly CAD" },
        { src: "Projects/Reverse%20engineering/MAchine2/r.jpeg", alt: "The real linear actuator setup used for reverse engineering measurements", caption: "Linear Actuator Setup — Real Machine" }
      ]
    },
    body: `
      <h4>Ven Pack Machine</h4>
      <ul>
        <li>Reverse-engineered the frame of an existing Ven Pack machine.</li>
        <li>Took precise measurements from the real machine to recreate the frame design.</li>
        <li>Verified sheet metal coverings against the designed frame to ensure correct dimensions.</li>
        <li>Developed accurate drawings and layouts based on collected data.</li>
      </ul>
      <h4>Linear Actuator Setup</h4>
      <ul>
        <li>Reverse-engineered an existing linear actuator setup.</li>
        <li>Took measurements to understand actuator dimensions and motor placement.</li>
        <li>Designed a motor mounting bracket based on the actuator geometry.</li>
        <li>Conducted lead screw calculations for motor selection.</li>
      </ul>
    `
  },

  "modal-dobot": {
    title: "Cobot Programming — DOBOT CR12A",
    type: "Work-Related · Robotics",
    year: "2025 – 2026",
    tech: ["DOBOT CR12A", "PLC Integration", "Registers"],
    repo: { label: "Proprietary / Internal" },
    media: {
      images: [
        { src: "Projects/Cobot%20programming/WhatsApp%20Image%202026-02-11%20at%2023.55.42.jpeg", alt: "DobotStudioPro block-based program on the teaching pendant, showing Modbus TCP holding registers and pick-and-place subroutines", caption: "Block Program — Modbus Registers & Subroutines" },
        { src: "Projects/Cobot%20programming/WhatsApp%20Image%202026-02-11%20at%2023.55.52.jpeg", alt: "DOBOT CR12A cobot arm on the shop floor with the teaching pendant running the pick-and-place program", caption: "CR12A Running the Program" }
      ]
    },
    body: `
      <h4>Technical Scope</h4>
      <ul>
        <li>Programmed the Dobot robot using the teaching pendant, including tray functions for pick-and-place tasks.</li>
        <li>Created subroutines to handle repeated actions and simplify programming.</li>
        <li>Configured input/output signals between the robot and PLC for automated control.</li>
        <li>Used holding registers to send and receive data with the PLC.</li>
        <li>Performed testing, debugging, and final commissioning.</li>
      </ul>
    `
  },

  "modal-karto-slam": {
    title: "Karto SLAM & Autonomous Navigation — ROS 2",
    type: "University · Autonomous Robotics",
    year: "2025",
    tech: ["ROS 2", "Karto SLAM", "Gazebo", "TurtleBot4", "Nav2", "Python", "slam_karto_ros2"],
    repo: { label: "View on GitHub", url: "https://github.com/AnusaraIsindu/ros2_karto_slam" },
    media: {
      video: { url: "https://drive.google.com/file/d/1JwZEj6Kol4WVS5WFO6fi7IaCVEAZQKeQ/view?usp=drive_link", title: "Karto SLAM case study demo video" }
    },
    body: `
      <h4>Project Overview</h4>
      <p>As part of our autonomous robotics coursework, we delved into Karto SLAM — a graph-based optimisation algorithm for real-time 2D mapping and localisation. Using ROS 2 as our core framework, we implemented and tested the system through the ADLINK open-source package <em>slam_karto_ros2</em>.</p>
      <p>Our goal was to understand how mobile robots build and refine a map while simultaneously tracking their own position — the core challenge of SLAM (Simultaneous Localisation and Mapping).</p>

      <h4>Technical Breakdown</h4>
      <ul>
        <li><strong>Scan Matching:</strong> Analysed how Karto aligns successive LiDAR scans to estimate robot displacement with high accuracy.</li>
        <li><strong>Pose-Graph Generation:</strong> Studied how each robot pose is added as a node, with edges encoding spatial constraints between positions.</li>
        <li><strong>Loop Closure:</strong> Explored how the system detects revisited locations and applies graph optimisation to correct accumulated drift.</li>
        <li><strong>Data Association:</strong> Investigated how sensor measurements are matched to existing map features to maintain consistency.</li>
      </ul>

      <h4>Simulation & Integration</h4>
      <ul>
        <li>Ran the full SLAM pipeline on a TurtleBot4 mobile robot inside the Gazebo simulation environment.</li>
        <li>Integrated Nav2 for autonomous path planning and localisation, enabling the robot to navigate while building the map in real time.</li>
        <li>Assessed map accuracy and system stability under different navigation patterns and environments.</li>
      </ul>

      <h4>Key Outcomes</h4>
      <ul>
        <li>Gained deep insight into sensor fusion and graph optimisation for mobile robotics.</li>
        <li>Understood the trade-offs between theoretical modelling and real-time SLAM performance.</li>
        <li>Successfully demonstrated a working autonomous mapping and navigation system in simulation.</li>
      </ul>

      <p><em>Collaborated with Aakash Kumareson and Chiranga Karunaratne. Guidance from faculty mentors and ADLINK ROS open-source community.</em></p>
    `
  },

  "modal-robocar": {
    title: "Microcontroller Project — Dual-Mode Robotic Car",
    type: "University · Microcontroller Coursework",
    year: "2025",
    tech: ["ESP32-CAM", "HC-05", "Robotics"],
    repo: { label: "View on GitHub", url: "https://github.com/Hashin2003/MXEN-Project" },
    media: {
      images: [
        { src: "Projects/Dual%20mode%20robotic%20car/Cart.jpg", alt: "The tracked dual-mode robotic car with its onboard wiring and electronics", caption: "The Robotic Car" },
        { src: "Projects/Dual%20mode%20robotic%20car/Controller1.jpg", alt: "Handheld controller with dual joysticks, Arduino, and LCD display for manual mode", caption: "Manual Controller — Top View" },
        { src: "Projects/Dual%20mode%20robotic%20car/Controller2.jpg", alt: "Underside of the handheld controller showing the Arduino Mega and wireless modules", caption: "Manual Controller — Underside" }
      ],
      video: { url: "https://drive.google.com/file/d/1uFYaNCIavP_cSzhbzZxTqCoZkV92NDUL/view?usp=sharing", title: "Dual-mode robotic car demo video" }
    },
    body: `
      <h4>Project Overview</h4>
      <p>Designed and developed a dual-mode car capable of operating in both autonomous and manual control modes.</p>
      <h4>Autonomous Mode</h4>
      <p>Equipped with an ESP32-CAM module for visual input, the car navigates and solves mazes autonomously using embedded logic.</p>
      <h4>Manual Mode</h4>
      <p>Controlled wirelessly via Bluetooth (HC-05) using an external controller, enabling full user navigation in real time.</p>
      <h4>Technical Stack</h4>
      <ul>
        <li>Microcontrollers: ESP32-CAM, Arduino Mega</li>
        <li>Communication: HC-05 Bluetooth Module</li>
        <li>Programming Language: C</li>
        <li>Real-time data processing and control logic for maze-solving algorithms</li>
      </ul>
    `
  },

  "modal-linefollow": {
    title: "Line-Following Cart",
    type: "University · Control Systems",
    year: "2025",
    tech: ["Arduino Nano", "Analog Circuits", "Python GUI", "555 Timer"],
    repo: { label: "View on GitHub", url: "https://github.com/Hashin2003/Line-Following-Cart" },
    media: {
      images: [
        { src: "Projects/Line%20following/WhatsApp%20Image%202025-10-20%20at%2009.51.22_8cbb1a80.jpg", alt: "Front view of the assembled line-following cart", caption: "The Cart — Front View" },
        { src: "Projects/Line%20following/WhatsApp%20Image%202025-10-20%20at%2009.51.21_dad86c00.jpg", alt: "Rear view of the line-following cart showing the IR sensor pair underneath", caption: "The Cart — Rear View" },
        { src: "Projects/Line%20following/WhatsApp%20Image%202025-10-20%20at%2009.51.22_676d2335.jpg", alt: "Top-down view of the custom analog control PCB with the Arduino Nano", caption: "Analog Control PCB" },
        { src: "Projects/Line%20following/GUI.png", alt: "Team Tritans custom Python control panel GUI with live IR sensor plot and output controls", caption: "Team Tritans — Python Control Panel" }
      ],
      video: { src: "Projects/Line%20following/2025_10_14_16_02_IMG_4249.MP4", title: "Line-following cart demo video" }
    },
    body: `
      <h4>Project Summary</h4>
      <p>An Arduino Nano based tracking cart combining real-time Bang-Bang control with a DAC + LM741 + LM339 + 555 Timer circuit for analog PWM generation, paired with a Python GUI for live control and sensor visualisation.</p>
      <p>Achieved smooth bidirectional motion, stable tracking, and responsive feedback — a hands-on integration of control theory and embedded electronics.</p>
    `
  },

  "modal-crazy-machine": {
    title: "Advanced Digital Design — Automated Crazy Machine",
    type: "University · Advanced Digital Design",
    year: "2025",
    tech: ["Altera DE1 FPGA", "VHDL", "FSM Design", "Arduino Mega", "SolidWorks", "3D Printing", "NEMA 17", "A4988", "IR Sensors"],
    repo: { label: "View on GitHub", url: "https://github.com/Hashin2003/Advanced-Digital-Design" },
    media: {
      images: [
        { src: "Projects/Automated%20Crazy%20Machine/1.png", alt: "SolidWorks CAD model of the Automated Crazy Machine", caption: "CAD Design (SolidWorks)" },
        { src: "Projects/Automated%20Crazy%20Machine/2.jpg", alt: "The completed Automated Crazy Machine, fully built and assembled", caption: "Final Build" }
      ],
      video: {
        youtubeId: "amQy1HgTtDQ",
        poster: "Projects/Automated%20Crazy%20Machine/Linkedin%20Video-Cover.jpg",
        title: "Automated Crazy Machine demo video"
      }
    },
    body: `
      <h4>Project Overview</h4>
      <p>Designed and developed a fully automated electromechanical Crazy Machine module that transports a steel ball through a themed bank-robbery sequence without human intervention. The system combines FPGA-based control, embedded systems, mechanical design, and automation to execute elevators, doors, vault mechanisms, and a final escape system. Controlled by an Altera FPGA running a VHDL-based finite state machine, with an Arduino Mega supporting additional I/O such as OLED display control and motor operation.</p>

      <h4>FPGA-Based Automation Control</h4>
      <ul>
        <li>Developed a complete autonomous control system using VHDL on an Altera FPGA development board.</li>
        <li>Implemented a finite state machine architecture to coordinate sensor inputs, timing sequences, and actuator outputs.</li>
        <li>Designed modular VHDL controllers for servo motors, stepper motors, elevators, doors, buzzer, and retrieval mechanisms.</li>
        <li>Used sensor feedback and timed state transitions to keep mechanisms in correct sequence.</li>
      </ul>

      <h4>Mechanical System Design</h4>
      <p>Designed and integrated a compact 40cm × 40cm × 40cm mechanical system: dual elevator mechanisms, servo-controlled doors, maze pathways, vault section, electromagnet retrieval mechanism, and a final DC motor escape mechanism. Custom components were built in SolidWorks and manufactured via 3D printing, with reliability improved through CAD-based validation and iterative design.</p>

      <h4>Sensor &amp; Actuator Integration</h4>
      <p><strong>Sensors:</strong> IR sensors for ball detection, LDR + laser system for optical detection, limit switches for elevator position feedback.</p>
      <p><strong>Actuators:</strong> NEMA 17 stepper motors for elevator movement, servo motors for doors, electromagnet for retrieval, N20 DC motor for final output. High-current devices were controlled through dedicated driver circuits to protect the FPGA.</p>

      <h4>Challenges &amp; Solutions</h4>
      <ul>
        <li><strong>Sensor false triggering</strong> during initial detection — solved by replacing the vibration sensor with an IR sensor system to prevent unwanted activation from external disturbances.</li>
        <li><strong>Unstable elevator movement</strong> — solved by correcting motor wiring and implementing 1/16 microstepping with A4988 drivers for smoother, more accurate elevator movement.</li>
      </ul>

      <h4>Outcome</h4>
      <p>Successfully developed and demonstrated a fully autonomous system capable of transporting the steel ball through the complete sequence within the required operating time, strengthening practical experience in FPGA development, automation, CAD modelling, electromechanical integration, and system-level debugging.</p>
    `
  },

  "modal-avms": {
    title: "Autonomous Vehicle Management System",
    type: "University · Software / Algorithms",
    year: "2024",
    tech: ["Python", "Data Structures", "Algorithms"],
    repo: { label: "View on GitHub", url: "https://github.com/Hashin2003/VehicleLocationManager" },
    media: {},
    body: `
      <h4>Project Overview</h4>
      <p>Used data structures and algorithms in Python to build a management system for autonomous vehicle tracking, routing matrix arrays, and speed control optimisation blocks.</p>
    `
  },

  "modal-robot-manipulation": {
    title: "Robot Manipulation — ROS 2 Dobot Control",
    type: "University · Robotics / ROS 2 (MXEN3005 Design Project)",
    year: "2026",
    tech: ["ROS 2", "Python", "Inverse Kinematics", "URDF", "Dobot", "Action/Service Interfaces"],
    repo: { label: "View on GitHub", url: "https://github.com/Hashin2003/Robot-Manipulation" },
    media: {
      video: { src: "Projects/Robot%20Manipulation/lv_0_20260527113056.mp4", title: "Robot Manipulation demo video" }
    },
    body: `
      <h4>Project Overview</h4>
      <p>Built a ROS 2 workspace for controlling a Dobot robotic arm as the MXEN3005 Design Project, structured as two packages: a custom interface package defining the robot's motion contracts, and a driver/teleop package implementing kinematics, control, and manual operation.</p>

      <h4>dobot_interface — Custom ROS 2 Interfaces</h4>
      <ul>
        <li><strong>JointPTP.action</strong> — point-to-point joint-space motion as an action goal, allowing progress feedback and cancellation during longer moves.</li>
        <li><strong>PosePTP.action</strong> — point-to-point Cartesian pose motion, letting a client command the end-effector directly in task space.</li>
        <li><strong>PickAndPlace.srv</strong> — a service for triggering a full pick-and-place sequence in one call.</li>
      </ul>

      <h4>dobot_teleop — Kinematics, Control &amp; Teleoperation</h4>
      <ul>
        <li>Implemented custom forward and inverse kinematics for the Dobot arm in <code>dobot_kinematics.py</code>.</li>
        <li>Built a driver/server pair (<code>dobot_driver.py</code>, <code>dobot_server.py</code>) to bridge ROS 2 nodes with the physical arm.</li>
        <li>Developed a control node (<code>dobot_control_node.py</code>) that hosts the action/service servers defined in <code>dobot_interface</code>.</li>
        <li>Added a keyboard teleoperation node (<code>keyboard_teleop_node.py</code>) for manual jogging and testing outside of autonomous sequences.</li>
        <li>Modelled the arm with URDF and mesh files for visualisation and simulation.</li>
      </ul>
    `
  },

  "modal-road": {
    title: "Road Structure Solution",
    type: "University · First-Year Engineering",
    year: "2023",
    tech: ["Civil Solutions", "Management", "Writing"],
    repo: { label: "Coursework report" },
    media: {
      video: { src: "Projects/Road%20Strcuture/INDE%20road%20design_final%20version%20v6%20v2%20v20.mp4", title: "Final road structure demo video" },
      pdf: { src: "Projects/Road%20Strcuture/INDE1001%20Stage%201-%20Yellow%20Squad%20-%20Design%20Pacakage.pdf", title: "Tender Report — Design Package" }
    },
    body: `
      <h4>Project Overview</h4>
      <p>First-year project designing structural improvements for Saibai Island's muddy roads, as requested by Australian engineers, to ensure reliable year-round infrastructure paths.</p>
    `
  },

  "modal-scada": {
    title: "PLC Project Involving SCADA",
    type: "Personal · Industrial Automation",
    year: "2024",
    tech: ["Siemens S7-400", "WinCC Flexible", "SCADA", "Ladder Logic"],
    repo: { label: "View on LinkedIn", url: "https://www.linkedin.com/in/hashin-gayasha-maharambage-350191285/details/projects/" },
    media: {},
    body: `
      <h4>Project Overview</h4>
      <p>Completed a Chemical Treatment Process Automation project as part of coursework at SLIR, using Siemens S7-400 (Simatic Manager) and WinCC Flexible for SCADA development. Focused on programming PLC logic to manage sequential operations — tank filling, timed heating, and pump control — implemented in ladder logic.</p>
      <h4>Control Interfaces</h4>
      <ul>
        <li>SCADA interface developed in WinCC Flexible</li>
        <li>Visual PLC simulation within Simatic Manager</li>
        <li>Physical push buttons and sensors from the model</li>
      </ul>
    `
  },

  "modal-elevator": {
    title: "3-Level Elevator Model",
    type: "Personal · PLC / Automation",
    year: "2024",
    tech: ["PLC Logic", "Ladder Logic", "Automation"],
    repo: { links: [
      { label: "View on GitHub", url: "https://github.com/Hashin2003/ElevatorModel" },
      { label: "View on LinkedIn", url: "https://www.linkedin.com/in/hashin-gayasha-maharambage-350191285/details/projects/" }
    ] },
    media: {},
    body: `
      <h4>Project Overview</h4>
      <p>First PLC programming project, completed at the Sri Lanka Institute of Robotics (SLIR). Automated a 3-level elevator model using ladder logic programming, focusing on the control logic.</p>
      <ul>
        <li>The elevator responds to button presses, moving up or down to the selected floor.</li>
        <li>Implemented precise control logic for smooth operation.</li>
      </ul>
    `
  },

  "modal-obstacle": {
    title: "Obstacle Avoiding Vehicle",
    type: "Personal · Robotics",
    year: "2023",
    tech: ["Arduino", "Ultrasonic Sensor", "PID Control"],
    repo: { links: [
      { label: "View on GitHub", url: "https://github.com/Hashin2003/OAVCode" },
      { label: "View on LinkedIn", url: "https://www.linkedin.com/in/hashin-gayasha-maharambage-350191285/details/projects/" }
    ] },
    media: {},
    body: `
      <h4>Project Overview</h4>
      <p>An Arduino-based obstacle-avoiding vehicle using ultrasonic sensors for detection and a PID controller to maintain stable, precise motor speed — ensuring smooth and efficient navigation.</p>
    `
  },

};